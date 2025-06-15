import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frm-array';
  xCount:number=0;
  myForm!:FormGroup;
  isDisableRemoveBtn:boolean=false;
   
  get colors(){
    return this.myForm.get('colors') as FormArray;
  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      colors:new FormArray([
        new FormGroup({name:new FormControl((++this.xCount).toString())}),
        new FormGroup({name:new FormControl((++this.xCount).toString())}),
        new FormGroup({name:new FormControl((++this.xCount).toString())})
      ])
    })
  }

  fnAddNew(){
    let arrForm:FormArray=this.myForm.get('colors') as FormArray;
    arrForm.push(new FormGroup({name:new FormControl((++this.xCount).toString())}))
    this.isDisableRemoveBtn=false;
  }

  fnRemove(){
    let arrForm:FormArray=this.myForm.get('colors') as FormArray;
    if(arrForm.length==1){this.isDisableRemoveBtn=true;} 
    if(arrForm.length>0){arrForm.removeAt(0)}
  }


}
