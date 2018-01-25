import { Component, OnInit } from '@angular/core';
import {LcService} from '../../services/lc.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};
  message:any;
  constructor(private lc: LcService, private router: Router) { }

  ngOnInit() {
    this.lc.currentMessage.subscribe(message => this.message = message);
  }

  register(){
    console.log("user",this.user)
    this.lc.register(this.user).subscribe(res =>{
      var result = res.json();
      if(result.status=="success"){
        this.router.navigate(['/login']); 
      }
    });
  }

}
