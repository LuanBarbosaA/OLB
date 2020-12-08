import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneService {

  url = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?&apikey=8c84f357161c4d8f1ac3921b4f47c30e1c08';
  urlContent = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?&apikey=8c84f357161c4d8f1ac3921b4f47c30e1c08';

  constructor(private httpClient: HttpClient, private errorHandlerService: ErrorHandler) {}

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
      this.urlContent + `&db=${db}&ids=${ids}`,
      { headers, responseType: 'text'}
    );
   }
}
