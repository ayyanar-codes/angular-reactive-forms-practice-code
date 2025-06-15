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
  title = '18.built-in-validation-max';
  textBox!:FormControl;

  ngOnInit(): void {
    this.textBox=new FormControl(0, Validators.max(10));
  }

  fnSubmit(){
    console.log(this.textBox.valid);
  }
}
