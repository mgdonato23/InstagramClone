import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Output() painelCadastro: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  exibirPainelCadastro() {
    this.painelCadastro.emit('cadastro');
  }
}
