import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import Handlebars from 'handlebars';

@Injectable()
export class ReceiptEmailService {
  constructor() {}

  getTemplate(data: any, templateDir: string): string {
    const template = Handlebars.compile(fs.readFileSync(templateDir, 'utf-8'));

    const html = template(data);

    return html;
  }
}
