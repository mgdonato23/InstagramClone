import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  @Output() painelLogin: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  exibirPainelLogin() {
    this.painelLogin.emit('login');
  }
}
