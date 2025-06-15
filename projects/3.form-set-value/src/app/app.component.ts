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
  title = 'frm-set-value';

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

  fnSetValue(){
    this.myForm.setValue(this.mockData());
  }

  fnSubmit(){
    console.log(this.myForm.value)
  }

  private mockData(){
    return {
      basicInfo:{
        firstName:'Saravana',
        lastName:'Kumar',
        email:'file.saravana@outlook.com',
        age:'30'
      },address:{
        addressLine1:'Pillaiyar koil street',
        addressLine2:'Pallikaranai',
        city:'Chennai',
        zipCode:'600100'
      }
    }
  }
}
