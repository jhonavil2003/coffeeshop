import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment.development';
import {Cafe} from "../model/Cafe";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private urlService = environment.urlService;

  constructor(private http: HttpClient) { }

  getCoffees(): Observable<Cafe[]> {
    return this.http.get<Cafe[]>(this.urlService);
  }
}
