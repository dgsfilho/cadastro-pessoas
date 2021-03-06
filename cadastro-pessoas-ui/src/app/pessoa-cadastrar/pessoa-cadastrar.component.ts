import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.css']
})
export class PessoaCadastrarComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePessoa() {
    this.pessoaService.createPessoa(this.pessoa).subscribe(data => {
      console.log(data);
      this.goToPessoaList();
    },
      error => console.log(error));
  }

  goToPessoaList() {
    this.router.navigate(['/pessoas']);
  }

  onSubmit() {
    console.log(this.pessoa);
    this.savePessoa();
  }
}
