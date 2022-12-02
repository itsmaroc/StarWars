import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Pesonne } from '../model/pesonne.model';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  prosonnages: Subject<Pesonne> = new Subject<Pesonne>;

  constructor(private http: HttpClient) { }

  getprsonnage(id: number) : Observable<any>{
    return this.http.get('https://swapi.py4e.com/api/people/'+id);
  }
}
