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
    this.route.navigate(['']);
    this.ngOnInit();
  }
  youtube() {
    this.route.navigate(['youtube']);
    this.ngOnInit();
  }
  portfolio() {
    this.route.navigate(['portfolio']);
    this.ngOnInit();
  }
  sobre() {
    this.route.navigate(['sobre']);
    this.ngOnInit();
  }
  qualificacoes() {
    this.route.navigate(['qualificacoes']);
    this.ngOnInit();
  }
  contato() {
    this.route.navigate(['contato']);
    this.ngOnInit();
  }
  jorivi() {
    window.open("https://www.instagram.com/jorivi_/", "_blank");
    this.ngOnInit();

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
