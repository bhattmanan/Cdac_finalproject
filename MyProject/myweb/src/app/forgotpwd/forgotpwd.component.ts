import { Component, OnInit } from '@angular/core';
import { user } from '../login/user';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-forgotpwd',
  templateUrl: './forgotpwd.component.html',
  styleUrls: ['./forgotpwd.component.css']
})
export class ForgotpwdComponent implements OnInit {

  constructor(private service : StudentsService) { }
  forgotModel = new user('','');
  ngOnInit() {
  }


  foregetpasswordStud(value)
  {
    console.log(value);
    this.service.ForgotPass(value).then(response=>{
      console.log(response)}).catch(error=>{console.log(error)});
  }


}
