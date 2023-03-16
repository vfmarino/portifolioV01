import { Component, OnInit } from '@angular/core';
import { faTwitter, faYoutube, faFacebook, faGithub,faWhatsapp, faTelegram, faInstagram,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  faTwitter = faTwitter
  faYoutube = faYoutube
  faFacebook = faFacebook
  faGithub = faGithub
  faWhatsapp = faWhatsapp
  faTelegram = faTelegram
  faInstagram = faInstagram
  faEnvelope = faEnvelope

  ngOnInit(): void {
  }

}
