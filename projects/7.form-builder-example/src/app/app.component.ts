import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'nested-frm-group';

  constructor(private fb:FormBuilder){

  }

  myForm!:FormGroup

  ngOnInit(): void {
    this.myForm=this.fb.group({
      basicInfo:this.fb.group({
        firstName:['Ayyanar'],
        lastName:['A'],
        email:['ayanarya@outlook.com'],
        age:['']
      }),
      address:this.fb.group({
        addressLine1:[''],
        addressLine2:[''],
        city:[''],
        zipCode:['']
      })
    })
  }

  fnSubmit(){
    console.log(this.myForm.value);
  }
}
