import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {

  id:any;
  catid: any;
  subcatid:any;
  productid:any;
  product: any;
  results: any;
  subcategories: any;

  constructor(private router: Router,private route: ActivatedRoute,public http: HttpClient) {
    this.catid = this.route.snapshot.params['catid'];
    this.productid = this.route.snapshot.params['productid'];
    this.subcatid = this.route.snapshot.params['subcatid'];
    this.http.get('http://13.127.87.1/index.php/rest/shops/get')
    .subscribe(res => {
      this.results = res;
      this.product = this.results.data[this.productid-1];
      this.product.description ="assets/themes/images/carousel/"+this.product.name+".jpg";
    });
    this.http.get('http://13.127.87.1/index.php/rest/items/get/shop_id/?shop_id='+this.productid+'&sub_cat_id='+this.subcatid+'&item=true&count=all&from=0')
    .subscribe(res => {
      this.results = res;
      this.subcategories = this.results.data;
      console.log("subcat",this.subcategories);
      this.subcategories.forEach(element => {
        element.cover_image_file = "http://13.127.87.1/uploads/" + element.images[0].path;
      });
    });
  }
  ngOnInit() {
  }

  subCategory(element){
    this.subcatid= element.sub_categories[0].id;
    this.catid = element.id;
    this.http.get('http://13.127.87.1/index.php/rest/items/get/shop_id/?shop_id='+this.productid+'&sub_cat_id='+this.subcatid+'&item=true&count=all&from=0')
    .subscribe(res => {
      this.results = res;
      this.subcategories = this.results.data;
      console.log("subcat",this.subcategories);
      this.subcategories.forEach(element => {
        element.cover_image_file = "http://13.127.87.1/uploads/" + element.images[0].path;
      });
    });
  }

  swipe(element){
    this.subcatid= element;
    this.http.get('http://13.127.87.1/index.php/rest/items/get/shop_id/?shop_id='+this.productid+'&sub_cat_id='+this.subcatid+'&item=true&count=all&from=0')
    .subscribe(res => {
      this.results = res;
      this.subcategories = this.results.data;
      console.log("subcat",this.subcategories);
      this.subcategories.forEach(element => {
        element.cover_image_file = "http://13.127.87.1/uploads/" + element.images[0].path;
      });
    });
  }

}
