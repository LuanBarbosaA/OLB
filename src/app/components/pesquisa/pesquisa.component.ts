import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GeneService } from 'src/app/services/gene.service';
import { ESearchResult } from 'src/app/services/models/Pesquisa';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {

  proteinaGene = '';
  nome = '';
  obj: any;

  constructor(
    private service: GeneService,
    private ngxXml2jsonService: NgxXml2jsonService,
    private router: Router,
  ) { }

  ngOnInit() {}

  pesquisar() {
    this.service.pesquisar(this.proteinaGene, this.nome);
  }

  permitePesquisar(): boolean {
    if (this.proteinaGene.length > 0 && this.nome.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
