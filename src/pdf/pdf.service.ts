import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';
import * as fs from 'fs';
import Handlebars from 'handlebars';
import {
  parseBrValueToNumber,
  parseFloatNumber,
} from 'src/helpers/math-helper';

@Injectable()
export class PdfService {
  constructor() {
    Handlebars.registerHelper('empty', function (value) {
      return value === undefined || value === null || value === '';
    });

    Handlebars.registerHelper('not', function (value) {
      return !value;
    });

    Handlebars.registerHelper('ifTrue', function (v1, operator, v2) {
      switch (operator) {
        case '==':
          return v1 == v2 ? true : false;
        case '===':
          return v1 === v2 ? true : false;
        case '!=':
          return v1 != v2 ? true : false;
        case '!==':
          return v1 !== v2 ? true : false;
        case '<':
          return v1 < v2 ? true : false;
        case '<=':
          return v1 <= v2 ? true : false;
        case '>':
          return v1 > v2 ? true : false;
        case '>=':
          return v1 >= v2 ? true : false;
        case '&&':
          return v1 && v2 ? true : false;
        case '||':
          return v1 || v2 ? true : false;
        default:
          return false;
      }
    });

    Handlebars.registerHelper('ifFalse', function (v1, operator, v2) {
      switch (operator) {
        case '==':
          return !(v1 == v2 ? true : false);
        case '===':
          return !(v1 === v2 ? true : false);
        case '!=':
          return !(v1 != v2 ? true : false);
        case '!==':
          return !(v1 !== v2 ? true : false);
        case '<':
          return !(v1 < v2 ? true : false);
        case '<=':
          return !(v1 <= v2 ? true : false);
        case '>':
          return !(v1 > v2 ? true : false);
        case '>=':
          return !(v1 >= v2 ? true : false);
        case '&&':
          return !(v1 && v2 ? true : false);
        case '||':
          return !(v1 || v2 ? true : false);
        default:
          return !false;
      }
    });

    Handlebars.registerHelper('parseIsoDateToBrDate', (dateString) => {
      const date = new Date(dateString + ' 00:00:00');
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();

      day = day.length < 2 ? '0' + day : day;
      month = month.length < 2 ? '0' + month : month;

      return `${day}/${month}/${date.getFullYear()}`;
    });

    Handlebars.registerHelper('parseDateObjToBrDate', (date) => {
      date = typeof date === 'string' ? new Date(date) : date;
      let day = date.getDate().toString();
      let month = (date.getMonth() + 1).toString();

      day = day.length < 2 ? '0' + day : day;
      month = month.length < 2 ? '0' + month : month;

      return `${day}/${month}/${date.getFullYear()}`;
    });

    Handlebars.registerHelper('formatHours', (hours) => {
      return hours.slice(0, 5);
    });
    Handlebars.registerHelper('gt', function (value1, value2) {
      return value1 > value2;
    });
    Handlebars.registerHelper('parseFloat', function (value) {
      return Number(Number(value).toFixed(1));
    });
    Handlebars.registerHelper('parseToBrValue', function (value) {
      return typeof value === 'string'
        ? Number(parseBrValueToNumber(value)).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
        : value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    });
    Handlebars.registerHelper('difference', function (value1, value2) {
      const diferenca = Number(value1) - value2;
      // const icon = diferenca >= 0 ? 'trend-up' : 'trend-down';
      const sinal = diferenca >= 0 ? '+' : '';
      return `(${sinal} ${parseFloatNumber(diferenca)})`;
    });
    Handlebars.registerHelper('equals', function (value1, value2) {
      return value1 === value2;
    });
  }

  async generatePDF(
    data: any,
    templateDir: string,
    options?: any,
  ): Promise<Buffer> {
    const template = Handlebars.compile(fs.readFileSync(templateDir, 'utf-8'));

    const html = template(data);

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox'],
      timeout: 10000,
    });

    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      preferCSSPageSize: true,
      printBackground: true,
      landscape: options?.landscape || false,
      ...options,
    });

    await browser.close();

    return pdfBuffer;
  }
}
