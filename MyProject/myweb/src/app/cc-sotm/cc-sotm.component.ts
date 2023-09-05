import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import * as $ from 'jquery';
import { CC_Sotm } from './cc-sotm';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cc-sotm',
  templateUrl: './cc-sotm.component.html',
  styleUrls: ['./cc-sotm.component.css']
})
export class CcSotmComponent implements OnInit {
  topicHasError = true;
  constructor(private _studentService: StudentsService, private router: Router) {
    this.getDisplay();
  }
  // cModel = new CC_Sotm(190, '');
  MonthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  coordinatordetail = JSON.parse(localStorage.getItem("mydata"));

  public cc_sotm: any = [];
  ngOnInit() {
    // this._studentService.getCC_Sotm().subscribe(data => this.cc_sotm = data);
    $(document).ready(function () {
      $("#getcform").click(function () {
        $('form').removeClass('cform');
      })
      $("#closecform").click(function () {
        $('form').addClass('cform');
      })
    })

  }

  getDisplay() {
    console.log("aaaa");
    this._studentService.getccSotm().subscribe((data) => this.cc_sotm = data);
    console.log("bbb");
  }

  validateMonth(value) {
    if ('' == value) {
      this.topicHasError = true;
    }
    else {
      this.topicHasError = false;
    }
  }
  submitSotm(sotmdata) {
    console.log(sotmdata);
    sotmdata.selectedMonthCourse = this.coordinatordetail;
    this._studentService.setccSotm(sotmdata).then(response => {
      console.log(response)
    }).catch(error => { console.log(error) });
    window.location.reload();
  }

  viewSotm(item) {
    this.router.navigate(["/viewsotm", item.stomId]);
  }

  editSotm(item) {
    this.router.navigate(["/editsotm", item.stomId]);
  }
}