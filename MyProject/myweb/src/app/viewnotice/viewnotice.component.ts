import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewnotice',
  templateUrl: './viewnotice.component.html',
  styleUrls: ['./viewnotice.component.css']
})
export class ViewnoticeComponent implements OnInit {

  constructor(private _studentService: StudentsService, private route: ActivatedRoute, private router: Router) { }

  public sotm = [];

  public com_notices: any;

  public id: string;

  ngOnInit() {
    // this._studentService.getSotm().subscribe(data => this.sotm = data);

    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );
  }

  getDisplay() {

    console.log(this.id);
    this._studentService.getViewdetails(parseInt(this.id)).then(response => {
      this.com_notices = response
    }).catch(error => { console.log(error) });


  }
}