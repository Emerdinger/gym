import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  idioma = ''

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  cambio(_idioma: any){
    console.log(localStorage.getItem('idioma')+' xd')
    this.translate.use(_idioma);
  }
}
