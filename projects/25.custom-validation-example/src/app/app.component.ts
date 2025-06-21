import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '25.custom-validation-example1';
  textbox!:FormControl;
  ngOnInit(): void {this.textbox=new FormControl(0, fnCustomValidation());}
  fnValidation(){ alert(JSON.stringify(this.textbox.valid));}
}

export function fnCustomValidation():ValidatorFn{
  return (ctrl:AbstractControl):ValidationErrors|null =>{
    if(ctrl.value>=1 && ctrl.value<=100){
      return null
    } else{ 
      return {customValidationError:true}
    }
  }
}
