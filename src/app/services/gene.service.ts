import { Router } from '@angular/router';
import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?&apikey=8c84f357161c4d8f1ac3921b4f47c30e1c08';
  urlContent = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?&apikey=8c84f357161c4d8f1ac3921b4f47c30e1c08&rettype=fasta&retmode=xml';
  public obj: any;

  constructor(
    private httpClient: HttpClient,
    private errorHandlerService: ErrorHandler,
    private ngxXml2jsonService: NgxXml2jsonService,
    private router: Router) {}

   get(db: string, query: string): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get(
      this.url + `&db=${db}&term=${query}`,
      { headers, responseType: 'text'}
    );
   }

   getContent(db: string, ids: string): Observable<string>{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get(
      this.urlContent + `&db=${db}&id=${ids}`,
      { headers, responseType: 'text'}
    );
   }

   pesquisar(db: string, proteinaGene: string) {
    this.get(db, proteinaGene).subscribe(x => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(x, 'text/xml');
      this.obj = this.ngxXml2jsonService.xmlToJson(xml);
      console.log(this.obj);

      this.getContent(db, this.obj.eSearchResult[1].IdList.Id.toString()).subscribe(y => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(y, 'text/xml');
        this.obj = this.ngxXml2jsonService.xmlToJson(xml);
        console.log(this.obj);
        if (db === 'gene') {
          this.router.navigate(['pesquisa/lista-gene']);
        } else {
          this.router.navigate(['pesquisa/lista-proteina']);
        }
      });

    });
   }
}
