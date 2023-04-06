import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homeyoutube',
  templateUrl: './homeyoutube.component.html',
  styleUrls: ['./homeyoutube.component.css']
})
export class HomeyoutubeComponent implements OnInit {

  constructor(
    private route : Router
  ) { }

  cadastro(){
    this.route.navigate(['cadastro'])
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnInit(): void {
  }

}
