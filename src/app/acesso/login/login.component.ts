import { FormControl, FormGroup } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() painelCadastro: EventEmitter<string> = new EventEmitter();
  formulario: FormGroup;

  constructor(private autenticacao: AutenticacaoService) {
    this.formulario = new FormGroup({
      email: new FormControl(null),
      senha: new FormControl(null),
    });
  }

  ngOnInit() {}

  exibirPainelCadastro() {
    this.painelCadastro.emit('cadastro');
  }

  autenticar() {
    this.autenticacao.autenticarLogin(
      this.formulario.value.email,
      this.formulario.value.senha
    );
  }
}
