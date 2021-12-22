import { Usuario } from './../model/usuario.model';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  token_id: string | null;

  constructor(private router: Router) {
    this.token_id = '';
  }

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
      .then((response: any) => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem('idToken', idToken);
            this.router.navigate(['/home']);
          });
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }

  autenticado(): boolean {
    if (
      this.token_id === undefined &&
      localStorage.getItem('idToken') != null
    ) {
      this.token_id = localStorage.getItem('idToken');
    }

    if ( this.token_id === undefined) {
      this.router.navigate(['/']);
    }

    return this.token_id !== undefined;
  }

  sair() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.router.navigate(['/']);
      });
  }
}
