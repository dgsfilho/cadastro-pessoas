import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../models/pessoa';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-alterar',
  templateUrl: './pessoa-alterar.component.html',
  styleUrls: ['./pessoa-alterar.component.css']
})
export class PessoaAlterarComponent implements OnInit {

  id: number;
  pessoa: Pessoa = new Pessoa();
  constructor(private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pessoaService.getPessoaById(this.id).subscribe(data => {
      this.pessoa = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.pessoaService.updatePessoa(this.id, this.pessoa).subscribe(data => {
      this.goToPessoaList();
    }
      , error => console.log(error));
  }

  goToPessoaList() {
    this.router.navigate(['/pessoas']);
  }
}
