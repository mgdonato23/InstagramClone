import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../service/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }

  sair(){
    this.autenticacaoService.sair()
  }

}
