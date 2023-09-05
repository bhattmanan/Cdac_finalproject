import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.css']
})
export class ViewcomplaintComponent implements OnInit {

  constructor(private _studentService: StudentsService, private route: ActivatedRoute, private router: Router) { }

  public id: string;

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

  }
  studentcomplaints: any;
  getdata() {

    console.log(this.id);
    console.log("hello...................");
    this._studentService.getComplaintdetails(parseInt(this.id)).then(response => {
      this.studentcomplaints = response,
        console.log(response)
    }).catch(error => { console.log(error) });


  }

}
