import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../models/pessoa';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-pessoa-detalhar',
  templateUrl: './pessoa-detalhar.component.html',
  styleUrls: ['./pessoa-detalhar.component.css']
})
export class PessoaDetalharComponent implements OnInit {

  id: number
  pessoa: Pessoa
  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.pessoa = new Pessoa();
    this.pessoaService.getPessoaById(this.id).subscribe(data => {
      this.pessoa = data;
    });
  }

}
