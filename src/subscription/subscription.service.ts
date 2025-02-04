import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import Stripe from 'stripe';
import {
  PriceNames,
  Subscription,
  priceIds,
  priceNames,
} from './entities/subscription.entity';
import { ClinicService } from '../clinic/clinic.service';
import { Clinic } from '../clinic/entities/clinic.entity';
import { ConfigService } from '@nestjs/config';

const appUrl = 'https://dash.odontcloud.com.br';
const webhookSecret = 'whsec_u4BhqqakGrKziKnd2klLcvN6wYolaPxV';

@Injectable()
export class SubscriptionService {
  private stripe: Stripe;

  constructor(
    private clinicService: ClinicService,
    @Inject('Subscription')
    private subscriptionsRepository: Repository<Subscription>,
    private configService: ConfigService,
  ) {
    this.stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-04-10',
    });
  }

  async createStripeCustomer(
    email: string,
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const customer = await this.stripe.customers.create({ email });
    await this.clinicService.updateByEmail(email, {
      clinic_stripe_customer_id: customer.id,
    });
    return customer;
  }

  async updateSubscriptionStatus(
    stripe_subscription_id: string,
    costumerId: string,
  ): Promise<Clinic> {
    try {
      const clinic =
        await this.clinicService.findOneByStripeCustomerId(costumerId);

      const subscription = await this.stripe.subscriptions.retrieve(
        stripe_subscription_id,
      );

      const subscription_level =
        priceNames[subscription.items.data[0].price.id];

      if (!clinic) {
        console.error(
          'Clínica não encontrada: stripe_subscription_id',
          stripe_subscription_id,
          ', costumerId: ',
          costumerId,
        );
        return;
      }

      if (!clinic.subscription) {
        clinic.subscription = await this.subscriptionsRepository.save({
          clinic_id: clinic.clinic_id,
          subscription_status: subscription.status,
          stripe_subscription_id,
          subscription_level,
        });
      } else {
        await this.subscriptionsRepository.update(clinic.subscription.id, {
          subscription_status: subscription.status,
          subscription_level,
        });
      }

      return this.clinicService.findOne(clinic.clinic_id);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteSubscription(costumerId: string): Promise<void> {
    try {
      const clinic =
        await this.clinicService.findOneByStripeCustomerId(costumerId);

      await this.subscriptionsRepository.delete(clinic.subscription.id);
    } catch (error) {
      console.error(error);
    }
  }

  async createCheckoutSession(
    clinicId: string,
    priceName: PriceNames,
  ): Promise<{ url: string }> {
    const clinic = await this.clinicService.findOne(clinicId);

    if (!clinic.clinic_stripe_customer_id) {
      clinic.clinic_stripe_customer_id = (
        await this.createStripeCustomer(clinic.clinic_email)
      ).id;
    }

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card', 'boleto'],
      line_items: [
        {
          price: priceIds[priceName], // Substitua pelo ID do preço real que você configurou no Stripe
          quantity: 1,
        },
      ],
      mode: 'subscription',
      customer: clinic.clinic_stripe_customer_id,
      success_url: `${appUrl}/app`,
      cancel_url: `${appUrl}/app/planos?calcelled=true`,
    });

    return { url: session.url };
  }

  async createBillingPortal(clinicId: string): Promise<{ url: string }> {
    const clinic = await this.clinicService.findOne(clinicId);

    if (!clinic.clinic_stripe_customer_id) {
      clinic.clinic_stripe_customer_id = (
        await this.createStripeCustomer(clinic.clinic_email)
      ).id;
    }

    const session = await this.stripe.billingPortal.sessions.create({
      customer: clinic.clinic_stripe_customer_id,
      return_url: `${appUrl}/app`,
    });

    return { url: session.url };
  }

  async webhookHandler(signature: string, payload: Buffer) {
    const event = await this.stripe.webhooks.constructEvent(
      payload,
      signature,
      webhookSecret,
    );

    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.paused':
        this.updateSubscriptionStatus(
          event.data.object.id,
          event.data.object.customer as string,
        );
        break;
      case 'customer.subscription.deleted':
        this.deleteSubscription(event.data.object.customer as string);
        break;
    }
  }
}
