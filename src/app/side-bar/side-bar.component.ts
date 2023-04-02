import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menuAberto = true;
  screenSize = false;
  constructor(
    private route: Router
  ) { }

  home() {
    this.route.navigate([''])
  }
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
  contato() {
    this.route.navigate(['contato'])
  }
  jorivi() {
    window.open("https://www.instagram.com/jorivi_/", "_blank");

  }

  menu(){
    this.menuAberto=!this.menuAberto;
  }

  ngOnInit(): void {
    if(this.screenSize=window.innerWidth>425){
      this.menuAberto=true;
    }else{
      this.menuAberto=false;
    }
  }

}
