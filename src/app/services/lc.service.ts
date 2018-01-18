import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class LcService {
  results: any;

  constructor(public http: HttpClient) {
    
  }

  totalShops(){
    console.log("results",this.results);
  }

}
