import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa'
import { PessoaService } from '../services/pessoa.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-pessoa-listar',
  templateUrl: './pessoa-listar.component.html',
  styleUrls: ['./pessoa-listar.component.css']
})
export class PessoaListarComponent implements OnInit {

  pessoas: Pessoa[];

  constructor(private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  private getPessoas() {
    this.pessoaService.getPessoasList().subscribe(data => {
      this.pessoas = data;
    });
  }

  pessoaDetails(id: number) {
    this.router.navigate(['pessoa-detalhar', id]);
  }

  updatePessoa(id: number) {
    this.router.navigate(['pessoa-alterar', id]);
  }

  deletePessoa(id: number) {
    this.pessoaService.deletePessoa(id).subscribe(data => {
      console.log(data);
      this.getPessoas();
    })
  }
}
