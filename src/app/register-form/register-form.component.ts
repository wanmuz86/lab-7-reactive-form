import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{

  registerForm! : FormGroup;
  constructor(private formBuilder: FormBuilder) {
  
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username:[''],
      // User can have multiple emails,
      // Build it as FormArray
      emails: this.formBuilder.array([

      ]),
    
    })
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
