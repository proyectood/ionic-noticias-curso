import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {
  
  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    query = apiUrl + query ;
    return this.http.get<T>( query, { headers } );
  }

  getTopHeadlines() {
    // return this.http.get<RespuestaTopHeadlines>(`https://newsapi.org/v2/top-headlines?country=us&apiKey=4669bcb819ac4ef79b09a43a0c737085`);
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
  }
  
  getTopHeadlinesCategoria( categoria: string ) {
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${ categoria }`);
  }
}


