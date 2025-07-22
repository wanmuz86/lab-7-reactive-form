import { Component } from '@angular/core';
import { RegisterFormComponent } from "./register-form/register-form.component";

@Component({
  selector: 'app-root',
  imports: [RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab-6-reactive-advanced-lab';
}
