import { Component, OnInit } from '@angular/core';
import { TraductorService } from './services/traductor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TraductorService) {
    
  }

  ngOnInit(): void {
    if (localStorage.getItem('idioma') == 'es' || localStorage.getItem('idioma') == 'en') {
      this.translate.cambio(localStorage.getItem('idioma'));
    } else {
      localStorage.setItem('idioma', 'es');
      this.translate.cambio('es');
    }
  }

  cambiarIdioma(_idioma: any){
    localStorage.setItem('idioma', _idioma);
    this.translate.cambio(_idioma);
  }
}
