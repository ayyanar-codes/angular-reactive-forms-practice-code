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
  title = '13.validation-status-touched';

  textBox!:FormControl;

  ngOnInit(): void {
    this.textBox=new FormControl("default", Validators.required);
  }

  fnSubmit(){
    console.log(this.textBox.touched);
  }
}
