import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneService } from 'src/app/services/gene.service';

@Component({
  selector: 'app-detalhes-gene',
  templateUrl: './detalhes-gene.component.html',
  styleUrls: ['./detalhes-gene.component.scss'],
})
export class DetalhesGeneComponent implements OnInit {

  obj: any;
  proteinList: any;

  constructor(
    private route: ActivatedRoute,
    private service: GeneService
  ) { }

  ngOnInit() {
    this.obj = this.service.obj["Entrezgene-Set"][1].Entrezgene.find(x =>
      x['Entrezgene_unique-keys'].Dbtag[0].Dbtag_tag['Object-id']['Object-id_id'] = this.route.snapshot.paramMap.get('id'));
    console.log(this.obj);

    this.proteinList = this.obj.Entrezgene_prot["Prot-ref"]["Prot-ref_name"]["Prot-ref_name_E"];
    console.log(this.proteinList);
  }

}
