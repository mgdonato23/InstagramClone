import { Usuario } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor() {}

  cadastrarUsuario(usuario: Usuario): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then(() => {
        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  autenticarLogin(email: string, senha: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((response: any) => console.log(response))
      .catch((error: Error) => {
        console.log(error);
      });
  }
}
