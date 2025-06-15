import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '8.binding-radio-bottons';
  myForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      termsAndConditions:this.fb.control(true)
    })
  }

  fnSubmit(){
    alert(JSON.stringify(this.myForm.value));
  }

}
