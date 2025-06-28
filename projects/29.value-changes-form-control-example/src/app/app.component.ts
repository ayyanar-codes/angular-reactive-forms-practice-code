import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = '29.value-changes-form-control-example';
  myForm!:FormGroup;
  mySubscription!:Subscription;

  constructor(){

  }



  ngOnInit(): void {
    this.myForm=new FormGroup({
      name:new FormControl('Ayyanar.A', Validators.required),
      email:new FormControl('ayanarya@outlook.com', [Validators.required, Validators.email])
    })

    this.mySubscription=this.name.valueChanges.subscribe(value=>{
      console.log(`New value: ${value}`);
    })

  }

  get name():FormControl{
    return this.myForm.get('name') as FormControl;
  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

}
