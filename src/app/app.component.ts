import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    if (localStorage.getItem('idioma') == 'es' || localStorage.getItem('idioma') == 'en') {
      let id = localStorage.getItem('idioma');
      this.translate.use(`${id}`);
    } else {
      localStorage.setItem('idioma', 'es');
      this.translate.use('es');
    }
  }

  cambiarIdioma(_idioma: any){
    localStorage.setItem('idioma', _idioma);
    this.translate.use(_idioma);
  }
}
