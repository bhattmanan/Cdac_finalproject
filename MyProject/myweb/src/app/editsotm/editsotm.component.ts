import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editsotm',
  templateUrl: './editsotm.component.html',
  styleUrls: ['./editsotm.component.css']
})
export class EditsotmComponent implements OnInit {
  MonthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private _studentService: StudentsService, private route: ActivatedRoute, private router: Router) { }

  public id: string;

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
  }

  gotoBack() {
    this.router.navigate(["/cc-sotm"]);
  }
  stomdetails: any;
  getData() {

    this._studentService.getStomData(parseInt(this.id)).then(response => {
      console.log(response), this.stomdetails = response
    }).catch(error => { console.log(error) });

  }

  coordinatordetails: any;
  submitSotm(stomdata) {
    console.log(stomdata);
    stomdata.stomId = parseInt(this.id);

    stomdata.selectedMonthCourse = JSON.parse(localStorage.getItem("mydata"));
    this._studentService.updateccSotm(stomdata).then(response => {
      console.log(response), this.stomdetails = response
    }).catch(error => { console.log(error) });

  }

}
