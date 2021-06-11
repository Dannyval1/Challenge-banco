import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private url: string = 'https://kgjg8lf6a0.execute-api.us-east-2.amazonaws.com/Test/cliente';

  constructor( private _http:HttpClient ) { }

  public getClient(data_nit): Observable<any>{
    return this._http.post( this.url, data_nit);
  }
}
