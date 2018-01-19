import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class LcService {
  results: any;

  constructor(public http: HttpClient) {
    
  }

  totalShops(){
    console.log("results",this.results);
  }

}
