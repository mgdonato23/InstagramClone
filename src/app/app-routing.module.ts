import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcessoComponent } from './acesso/acesso.component';
import { HomeComponent } from './home/home.component';
import { AutenticacaoGuardService } from './service/autenticacao-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AcessoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AutenticacaoGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
