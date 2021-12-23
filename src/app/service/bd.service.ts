import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class BdService {
  constructor() {}

  publicar(publicacao: any) {
    /* firebase.database().ref(`publicacoes/${????}`) */
  }
}
