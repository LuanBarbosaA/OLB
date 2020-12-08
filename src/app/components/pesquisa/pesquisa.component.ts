import { Component, OnInit } from '@angular/core';
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

  constructor(private service: GeneService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {}

  pesquisar(){
    this.service.get('gene', 'nonagouti').subscribe(x => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(x, 'text/xml');
      this.obj = this.ngxXml2jsonService.xmlToJson(xml);

      this.service.getContent('gene', this.obj.eSearchResult[1].IdList.Id.toString()).subscribe(x => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(x, 'text/xml');
        const obj = this.ngxXml2jsonService.xmlToJson(xml);
        console.log(obj);
      });

    });
  }

  permitePesquisar(): boolean {
    if (this.proteinaGene.length > 0 && this.nome.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}
