import { GeneService } from 'src/app/services/gene.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes-proteina',
  templateUrl: './detalhes-proteina.component.html',
  styleUrls: ['./detalhes-proteina.component.scss'],
})
export class DetalhesProteinaComponent implements OnInit {

  obj: any;

  constructor(
    private route: ActivatedRoute,
    private service: GeneService
  ) { }

  ngOnInit() {
    this.obj = this.service.obj.TSeqSet[1].TSeq[this.route.snapshot.paramMap.get('id')];
    this.obj = this.service.obj.TSeqSet[1].TSeq.find(x => x.TSeq_accver = this.route.snapshot.paramMap.get('id'));
    console.log(this.obj);
  }

}
