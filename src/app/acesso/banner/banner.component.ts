import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Imagem } from './imagem.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [
    trigger('banner', [
      state(
        'escondido',
        style({
          opacity: 0,
        })
      ),
      state(
        'visivel',
        style({
          opacity: 1,
        })
      ),
      /* transition(
        'escondido => visivel', 
        animate('1s ease-in')
      ),
      transition(
        'visivel => escondido', 
        animate('1s ease-in')
      ), */
      transition('escondido <=> visivel', animate('2s ease-in')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  imagens: Imagem[] = [
    { estado: 'visivel', url: '/assets/banner-acesso/images/img_1.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/images/img_2.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/images/img_3.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/images/img_4.png' },
    { estado: 'escondido', url: '/assets/banner-acesso/images/img_5.png' },
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.logicaRotacao(), 2000);
  }

  logicaRotacao() {
    for (let i: number = 0; i <= 4; i++) {
      if (this.imagens[i].estado === 'visivel') {
        this.imagens[i].estado = 'escondido';

        if (i + 1 <= 4) {
          this.imagens[i + 1].estado = 'visivel';
        } else {
          this.imagens[0].estado = 'visivel';
        }
        break;
      }
    }

    setTimeout(() => this.logicaRotacao(), 2000);
  }
}
