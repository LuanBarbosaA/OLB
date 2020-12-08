import { GeneService } from 'src/app/services/gene.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-proteina',
  templateUrl: './lista-proteina.component.html',
  styleUrls: ['./lista-proteina.component.scss'],
})
export class ListaProteinaComponent implements OnInit {

  listaProteina: Array<any>;

  constructor(private service: GeneService, private router: Router) { }

  ngOnInit() {
    this.listaProteina = this.service.obj.TSeqSet[1].TSeq;
  }

  detalheProteina(id: string) {
    this.router.navigate(['pesquisa/detalhes-proteina', { id }]);
  }

}
