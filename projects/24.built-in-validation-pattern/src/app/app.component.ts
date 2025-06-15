import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '24.built-in-validation-pattern';
  textBox!:FormControl;

  ngOnInit(): void {
    this.textBox=new FormControl("default", Validators.pattern('^[a-zA-Z ]+$'));
  }

  fnSubmit(){
    console.log(this.textBox.valid);
  }
}
