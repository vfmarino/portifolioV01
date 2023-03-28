import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-forms-component',
  templateUrl: './google-forms-component.component.html',
  styleUrls: ['./google-forms-component.component.css']
})
export class GoogleFormsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // redimensiona o iframe para ajustar o tamanho do formulário
    window.addEventListener("message", function(e) {
      var message = e.data[0];
      var frameHeight = parseInt(message["height"]);
      var frameWidth = parseInt(message["width"]);
      var iframe = document.getElementById(message["id"]);
      if (iframe) {
        iframe.style.height = frameHeight + "px";
        iframe.style.width = frameWidth + "px";
      }
    }, false);
  }
}
