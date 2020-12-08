import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { GeneService } from 'src/app/services/gene.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss'],
})
export class PesquisaComponent implements OnInit {

  constructor(private service: GeneService, private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {}

  pesquisar(){
    this.service.get("protein", "nonagouti").subscribe(x=> {
      const parser = new DOMParser();
      const xml = parser.parseFromString(x, 'text/xml');
      const obj = this.ngxXml2jsonService.xmlToJson(xml);
      console.log(obj);
    });
  }
}
