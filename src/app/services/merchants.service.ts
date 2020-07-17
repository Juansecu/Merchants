import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Merchant } from '../interfaces/merchant';
import { Coordinate } from '../interfaces/coordinate';
import { Sale } from '../interfaces/sale';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantsService {

  constructor(private http: HttpClient) { }

  merchants() {
    const apiURL = 'https://alw-lab.herokuapp.com/commerces';
    return this.http.get<Merchant[]>(apiURL);
  }

  geometry() {
    const apiURL = 'https://alw-lab.herokuapp.com/commerces/layer';
    return this.http.get<Coordinate[]>(apiURL);
  }

  sales(): Observable<any> {
    const apiURL = 'alw-lab.herokuapp.com/commerces/graph';
    return this.http.get<Sale[]>(apiURL);
  }
}
