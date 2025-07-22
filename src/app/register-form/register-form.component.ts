import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { of,delay,map, Observable } from 'rxjs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent implements OnInit{

  registerForm! : FormGroup;
  constructor(private formBuilder: FormBuilder) {
  
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username:['' , {
        // Adding validation to the username FormControl
        validators: [Validators.required, Validators.minLength(3)],
        // asyncValidators = Perform validation asynchronously upon onblur (losing focus)
        asyncValidators: [this.usernameTakenValidator()],
        updateOn: 'blur' // Update the value on blur 
      }], // Username is a string
      // User can have multiple emails,
      // Build it as FormArray
      emails: this.formBuilder.array([

      ]),
    
    })
  }
  // This is a placeholder for the async validator function
  usernameTakenValidator() : AsyncValidatorFn {
    // List of taken usernames for simulation
    const takenUsernames = ['admin','user1','user2'];
    // THe validation process,  control here refers to the FormControl where the validation will be performed
    return (control:AbstractControl) => {
      return of(
        // if the name entered by user (control.value) is in the array
        // pipe is used to perform operations on the observable one after another

        takenUsernames.includes(control.value)).pipe
        (
          delay(1000), // Simulate API call, wait 1 second to see the loading
          // Map the boolean value to a ValidationError object, null means ok
          map(isTaken =>   isTaken ? { usernameTaken: true } : null)
        )
      
    }
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }

}
