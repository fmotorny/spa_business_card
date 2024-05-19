import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CollectionResModel } from '../shared/models/collection.res.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getProductsTest(): Observable<any> {
    return this.http.get(environment.apiUrl + 'products')
  }
  public getPagesTest(): Observable<any> {
    return this.http.get(environment.apiUrl + 'pages')
  }

  public getPageDataByUrl(url: string): Observable<CollectionResModel> {
    return this.http.get<CollectionResModel>(environment.apiUrl + `pages?filters[url][$eq]=${url}`)
  }
}
