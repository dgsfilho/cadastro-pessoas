import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListarComponent } from './pessoa-listar/pessoa-listar.component';
import { PessoaCadastrarComponent } from './pessoa-cadastrar/pessoa-cadastrar.component';
import { FormsModule } from '@angular/forms';
import { PessoaAlterarComponent } from './pessoa-alterar/pessoa-alterar.component';
import { PessoaDetalharComponent } from './pessoa-detalhar/pessoa-detalhar.component'

@NgModule({
  declarations: [
    AppComponent,
    PessoaListarComponent,
    PessoaCadastrarComponent,
    PessoaAlterarComponent,
    PessoaDetalharComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
