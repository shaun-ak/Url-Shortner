import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private userService:UserService) { 
    this.userForm = new FormGroup({
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
    })
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.userForm.value);
    this.userService.loginUser(this.userForm.value).subscribe((data) =>{
      console.log(data);
      alert("User Logged In successfully!");
    },(err) => {
      console.log(err);
      alert(err.error.message);
    })
  }

}
