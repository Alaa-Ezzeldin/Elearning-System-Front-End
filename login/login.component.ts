import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  showPassword:boolean;
  submitted = false;
  show= false;
  input:string= "password";

  
  constructor() { }

  ngOnInit() {
    this.loginForm=new FormGroup({
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,Validators.required)
    });
  }
  get f() { return this.loginForm.controls; }

  public onSubmit(){
    this.submitted = true;
    // console.log(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
  }
  console.log(this.loginForm.value);
  }

  toggleShow()
    {
        this.show = !this.show;
        if (this.show){
            //change the type to text
            this.input="text";
            // this.input.nativeElement.type='text';

        }
        else {
          this.input="password";
                      //change the type to password
        }
    }

}

