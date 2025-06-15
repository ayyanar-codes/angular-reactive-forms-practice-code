import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frmGroup';
  myForm!:FormGroup

  ngOnInit(): void {
    this.myForm=new FormGroup({
      firstName:new FormControl('Ayyanar'),
      lastName:new FormControl('A')
    });  
  }

  fnSubmit(){
    console.log(JSON.stringify(this.myForm.value));
  }
}
