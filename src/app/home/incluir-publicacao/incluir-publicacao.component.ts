import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/service/bd.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-incluir-publicacao',
  templateUrl: './incluir-publicacao.component.html',
  styleUrls: ['./incluir-publicacao.component.css'],
})
export class IncluirPublicacaoComponent implements OnInit {
  formulario: FormGroup;
  email: string | null = '';

  constructor(private bdService: BdService) {
    this.formulario = new FormGroup({
      titulo: new FormControl(null),
    });
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      /* this.email = user.email */
    })
  }

  publicar() {
    this.bdService.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo
    });
  }
}
