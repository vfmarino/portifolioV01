import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { faTwitter, faYoutube, faFacebook, faGithub,faWhatsapp, faTelegram, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDarkTheme: boolean = true;

  constructor() { }

  faTwitter = faTwitter
  faYoutube = faYoutube
  faFacebook = faFacebook
  faGithub = faGithub
  faWhatsapp = faWhatsapp
  faTelegram = faTelegram
  faInstagram = faInstagram
  faEnvelope = faEnvelope


  toggleTheme(){
    this.isDarkTheme=!this.isDarkTheme;
    const html = document.documentElement;
    html.setAttribute('data-theme', this.isDarkTheme ? 'dark':'light')

  }

  instagram(){
    window.open("https://www.instagram.com/vatien_/", "_blank");
  }
  facebook(){
    window.open("https://www.facebook.com/vatien.youtube", "_blank");
  }
  twitter(){
    window.open("https://twitter.com/Vatien1", "_blank");
  }
  youtube(){
    window.open("https://www.youtube.com/c/Vatien", "_blank");
  }
  telegram(){
    window.open("https://t.me/vatiencriptomoedas", "_blank");
  }
  github(){
    window.open("https://github.com/vfmarino", "_blank");
  }
  email(){
    alert("No Momento não estamos Atendendo via e-mail, favor entrar em contanto por alguma rede social!");
  }
  whatsapp(){
    alert("No Momento não estamos Atendendo via Whataspp, favor entrar em contanto por alguma rede social!")
  }

  ngOnInit(): void {

  }

}
