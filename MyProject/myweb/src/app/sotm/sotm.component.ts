import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sotm',
  templateUrl: './sotm.component.html',
  styleUrls: ['./sotm.component.css']
})
export class SotmComponent implements OnInit {

  constructor(private _studentService: StudentsService, private router: Router) {
    this.getDisplay();
  }

  public sotm: any = [];


  ngOnInit() {
    this._studentService.getSotm().subscribe(data => this.sotm = data);
  }

  getDisplay() {
    // return this._studentService.getNotices().subscribe((data) => this.sotm = data);
  }

  viewSotm(item) {
    this.router.navigate(["/viewsotm", item.stomId]);
  }

}
