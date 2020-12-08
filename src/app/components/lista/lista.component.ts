import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneService } from 'src/app/services/gene.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaGeneComponent implements OnInit {

  listaGene: Array<any>;

  constructor(private service: GeneService, private router: Router) { }

  ngOnInit() {
    this.listaGene = this.service.obj["Entrezgene-Set"][1].Entrezgene;
    console.log(this.listaGene);
  }

  detalheGene(id: string) {
    this.router.navigate(['pesquisa/detalhes-gene', { id }]);
  }

}
