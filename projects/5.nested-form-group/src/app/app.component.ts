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
  title = 'nested-frm-group';

  myForm!:FormGroup

  ngOnInit(): void {
    this.myForm=new FormGroup({
      basicInfo:new FormGroup({
        firstName:new FormControl('Ayyanar'),
        lastName:new FormControl('A'),
        email:new FormControl('ayanarya@outlook.com'),
        age:new FormControl('')
      }),
      address:new FormGroup({
        addressLine1:new FormControl(''),
        addressLine2:new FormControl(''),
        city:new FormControl(''),
        zipCode:new FormControl('')
      })
    })
  }

  fnSubmit(){
    console.log(this.myForm.value);
  }
}
