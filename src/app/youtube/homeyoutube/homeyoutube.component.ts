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
  scrollTo(elementId: string, offset: number = 0): void {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const top = rect.top + scrollTop - offset;
      window.scrollTo({top, behavior: 'smooth'});
    }
  }


  ngOnInit(): void {
  }

}
