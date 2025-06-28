import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = '30.value-changes-form-group-example';
  myForm!:FormGroup;
  mySubscription!:Subscription;
  constructor(){

  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.email])
    });

    this.mySubscription=this.myForm.valueChanges.subscribe(value=>{
      console.log(value);
    })
  }

  ngOnDestroy(): void {
    
  }
}
