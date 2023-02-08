import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  registerForm=new FormGroup({
    firstname:new FormControl('', [Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
    lastname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(256)]),
    age:new FormControl('',[Validators.required,Validators.maxLength(3)]),
    Username:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.email]),
    phnno:new FormControl('',[Validators.pattern("^[0-9]")]),
    additionaldata:new FormControl(''),
  })
  validatefristname="*Fristname is Required";
  validatelastname="*laststname is Required";
  validateemail="*Enter the valid email";
  validatephnno="Enter the 10 digit number ";
  validateusername="*please enter valid Username";
  validateage="*please enter age"
  labeldata:string="";
   onsubmit(){
    console.log(this.registerForm)
  }
  addtolabel(eventdata:Event){
    this.labeldata=(<HTMLInputElement>eventdata.target).value
  }
}
