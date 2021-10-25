import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm:FormGroup;
  constructor(private userService:UserService) { 
    this.userForm = new FormGroup({
      'userName': new FormControl('', Validators.required),
      'userEmail': new FormControl('', [Validators.required, Validators.email]),
      'dob': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.userService.registerUser(this.userForm.value).subscribe(() => {
      alert("User Created Successfully");
    },(err) => {
      console.log(err);
    })
  }

}
