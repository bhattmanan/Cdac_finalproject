import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-viewsotm',
  templateUrl: './viewsotm.component.html',
  styleUrls: ['./viewsotm.component.css']
})

export class ViewsotmComponent implements OnInit {

  constructor(private _studentService: StudentsService, private route: ActivatedRoute, private router: Router) { }

  public sotm = [];

  public com_sotm = [];

  public id: string;

  ngOnInit() {

    this._studentService.getSotm().subscribe(data => this.sotm = data);

    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      }
    );

  }

  studentStom: any;
  getdata() {

    console.log(this.id);
    console.log("hello...................");
    this._studentService.getStomData(parseInt(this.id)).then(response => {
      this.studentStom = response,
        console.log(response)
    }).catch(error => { console.log(error) });


  }



  getDisplay() {

    
    return this.sotm;
  }

}