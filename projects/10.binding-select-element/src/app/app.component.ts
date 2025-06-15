import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '';
  myForm!:FormGroup;
  cityLookUp:any[]=[{key:0,value:"Select"},{key:1,value:"Chennai"},{key:2,value:"Bangalue"},{key:3,value:"Delhi"}]

  constructor(private fb:FormBuilder){

  }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      city:this.fb.control(0)
    })
  }

  fnSubmit(){
    alert(JSON.stringify(this.cityLookUp.filter(x=>x.key==this.myForm.get('city')?.value)[0].value));
  }

}
