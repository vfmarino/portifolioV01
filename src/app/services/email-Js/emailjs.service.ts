import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {

  constructor() {
    emailjs.init('vq2b6k9zsfiHsZqsc');
  }

  sendEmail(contactForm: any): Promise<EmailJSResponseStatus> {
    return emailjs.send('service_p4sx5rg', 'template_ee7slap', {
      name: contactForm.name,
      email: contactForm.email,
      assunto: contactForm.assunto,
      telefone: contactForm.telefone,
      message: contactForm.message
    });
  }
}
