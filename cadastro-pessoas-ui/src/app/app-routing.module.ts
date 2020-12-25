import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaAlterarComponent } from './pessoa-alterar/pessoa-alterar.component';
import { PessoaDetalharComponent } from './pessoa-detalhar/pessoa-detalhar.component';

const routes: Routes = [
  { path: 'pessoas', component: PessoaListarComponent },
  { path: 'pessoa-cadastrar', component: PessoaCadastrarComponent },
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  { path: 'pessoa-alterar/:id', component: PessoaAlterarComponent },
  { path: 'pessoa-detalhar/:id', component: PessoaDetalharComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
