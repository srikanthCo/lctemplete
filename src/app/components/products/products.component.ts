import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id:any;
  product: any;
  results: any;
  category: any;

  constructor(private router: Router,private route: ActivatedRoute,public http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
    this.http.get('http://13.127.87.1/index.php/rest/shops/get')
    .subscribe(res => {
      this.results = res;
      this.product = this.results.data[this.id-1];
      this.product.description ="assets/themes/images/carousel/"+this.product.name+".jpg";
      console.log("product",this.product)
      this.product.categories.forEach(element => {
        element.cover_image_file = "http://13.127.87.1/uploads/" + element.cover_image_file;
        // element.dashboard_icon = "assets/images/"+element.name+".png";
      });
    });
  }

  ngOnInit() {
  }

}
