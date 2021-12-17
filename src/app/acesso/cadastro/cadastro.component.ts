import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario.model';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @Output() painelLogin: EventEmitter<string> = new EventEmitter();
  formulario: FormGroup;

  constructor(private autenticacao: AutenticacaoService) {
    this.formulario = new FormGroup({
      'email': new FormControl(null),
      'nome_completo': new FormControl(null),
      'nome_usuario': new FormControl(null),
      'senha': new FormControl(null)
    })
  
  }

  ngOnInit() {}

  exibirPainelLogin() {
    this.painelLogin.emit('login');
  }

  cadastrarUsuario() {
    let usuario: Usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    );

    this.autenticacao.cadastrarUsuario(usuario)
      .then(() => this.exibirPainelLogin());
  }
}
