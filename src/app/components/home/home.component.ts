import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  results: any;

  constructor(public http: HttpClient){
    
    // Make the HTTP request:
    this.http.get('http://13.127.87.1/index.php/rest/shops/get')
    .subscribe(res => {
      this.results = res;
      this.results.data.forEach(element => {
        element.cover_image_file = "http://13.127.87.1/uploads/" + element.cover_image_file;
        element.dashboard_icon = "assets/images/"+element.name+".png";
      });
      console.log("results",this.results)
    });
  }

  ngOnInit() {
  }

}
