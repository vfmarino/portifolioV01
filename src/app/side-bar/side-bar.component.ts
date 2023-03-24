import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(
    private route: Router
  ) { }

  youtube() {
    this.route.navigate(['youtube']);
  }
  portfolio() {
    this.route.navigate(['portfolio'])
  }
  sobre() {
    this.route.navigate(['sobre'])
  }
  qualificacoes() {
    this.route.navigate(['qualificacoes'])
  }
  jorivi() {
    window.open("https://www.instagram.com/jorivi_/", "_blank");

  }

  ngOnInit(): void {
  }

}
