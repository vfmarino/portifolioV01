import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { EmailjsService } from '../services/email-Js/emailjs.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private emailjsService: EmailjsService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', Validators.required),
      assunto: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  sendEmail() {
    this.emailjsService.sendEmail(this.contactForm.value)
      .then((response) => {
        alert('SUCCESS!');
        // adicione aqui um código para exibir uma mensagem de sucesso ao usuário
      }, (error) => {
        console.log('FAILED...', error);
        // adicione aqui um código para exibir uma mensagem de erro ao usuário
      });
  }
}
