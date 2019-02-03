import { Component, OnInit, Directive } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
  
})
export class RegistrationComponent implements OnInit {

  PasswordValidator(confirmPasswordInput: string) {
    let confirmPasswordControl: FormControl;
    let passwordControl: FormControl;
  
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }
  
      if (!confirmPasswordControl) {
        confirmPasswordControl = control;
        passwordControl = control.parent.get(confirmPasswordInput) as FormControl;
        passwordControl.valueChanges.subscribe(() => {
          confirmPasswordControl.updateValueAndValidity();
        });
      }
  
      if (
        passwordControl.value !==
        confirmPasswordControl.value
      ) {
        return {
          notMatch: true
        };
      }
      return null;
    };
  }

  registerForm:FormGroup;
  submitted = false;
  hidden=true;
  status:string ="active";
  status1:string="inactive";
  genders=['male','female'];



  constructor() { }

  ngOnInit() {
    this.registerForm=new FormGroup({
      firstName:new FormControl(null,Validators.required),
      lastName:new FormControl(null,Validators.required),
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,Validators.required),
      confirmPassword: new FormControl(null,[Validators.required,this.PasswordValidator('password')]),
      gender: new FormControl(),
      dateOfBirth:new FormControl(null,Validators.required)
    });
  }
  get f() { return this.registerForm.controls; }

  public onSubmit(){
    this.submitted = true;  

    if (this.registerForm.invalid){
      return;
    }
    console.log(this.registerForm.value);

  }
}