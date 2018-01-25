import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class LcService {
  results: any;

  private messageSource = new BehaviorSubject<Boolean>(false);
  currentMessage = this.messageSource.asObservable();

  constructor(public http: HttpClient,private htp:Http) {
    
  }

  changeMessage(message: Boolean) {
    this.messageSource.next(message)
  }

  totalShops(){
    console.log("results",this.results);
  }

  login(user){
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    let url = 'http://13.127.87.1/index.php/rest/appusers/login';
    var data = "email="+user.email+"&password="+ user.password;
    return this.htp.post(url, data, options)
  }

  register(user){
    var url = "http://13.127.87.1/index.php/rest/appusers/add/";
    const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const options = new RequestOptions({ headers: headers });
    var data = "username="+user.username+"&password="+user.password+"&email="+user.email+"&about_me="+user.about_me;
    return this.htp.post(url,data, options)
  }

}
