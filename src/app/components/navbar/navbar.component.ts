import { Component, OnInit } from '@angular/core';
import {LcService} from '../../services/lc.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message:any;

  constructor(private lc : LcService) { }

  ngOnInit() {
    this.lc.currentMessage.subscribe(message => this.message = message)
  }
  logout() {
    this.lc.changeMessage(false)
  }

}
