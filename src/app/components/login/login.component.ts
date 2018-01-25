import { Component, OnInit, transition } from '@angular/core';
import {LcService} from '../../services/lc.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  wrong:boolean=false;
  message:any;
  constructor(private lc: LcService, private router: Router) { }

  ngOnInit() {
    this.lc.currentMessage.subscribe(message => this.message = message);
  }

  login(){
    console.log("user",this.user)
    this.lc.login(this.user).subscribe(res =>{
      var result = res.json();
      if(result.status=="success"){
      this.lc.changeMessage(true);
        this.router.navigate(['/']); 
      }else{
        this.wrong = true;
      }
      console.log("res",res.json());
    });
  }
}
