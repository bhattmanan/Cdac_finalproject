import { Component, OnInit } from '@angular/core';
import { pass } from './resetpwd';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {

  constructor() { }
  resetModel = new pass('','');
  ngOnInit() {
  }

}
