import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = '26.custom-validation-form-group';
  cityLookups:any[]=[   
    { "key": 1, "value": "Chennai" },
    { "key": 2, "value": "Coimbatore" },
    { "key": 3, "value": "Madurai" },
    { "key": 4, "value": "Tiruchirappalli" },
    { "key": 5, "value": "Salem" },
    { "key": 6, "value": "Tirunelveli" },
    { "key": 7, "value": "Erode" },
    { "key": 8, "value": "Vellore" },
    { "key": 9, "value": "Thoothukudi" },
    { "key": 10, "value": "Thanjavur" },
    { "key": 11, "value": "Dindigul" },
    { "key": 12, "value": "Nagercoil" },
    { "key": 13, "value": "Karur" },
    { "key": 14, "value": "Sivakasi" },
    { "key": 15, "value": "Cuddalore" },
    { "key": 16, "value": "Kanchipuram" },
    { "key": 17, "value": "Nagapattinam" },
    { "key": 18, "value": "Tiruvannamalai" },
    { "key": 19, "value": "Namakkal" },
    { "key": 20, "value": "Pudukkottai" }
  ];
  
  myForm!:FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.myForm=new FormGroup({
      source:new FormControl(0, requiredValidationForSelect()),
      destination:new FormControl(0, requiredValidationForSelect()),
      brokerage:new FormControl(0)
    }, brokerageFrmGrpValidation())
  }

  fnSubmit(){console.log(JSON.stringify(this.myForm.value)); }
}

export function requiredValidationForSelect():ValidatorFn{
  return(ctrl:AbstractControl):ValidationErrors|null =>{

    let formCtrl=ctrl as FormControl;

    if(formCtrl.value>0){return null}
    else {return {required:true}}
  }
}

export function brokerageFrmGrpValidation():ValidatorFn{
  return (ctrl:AbstractControl):ValidationErrors|null=>{

    let frmGrp:FormGroup=ctrl as FormGroup;
    let ctrlSource:FormControl=frmGrp.get('source') as FormControl;
    let ctrlDestination:FormControl=frmGrp.get('destination') as FormControl;
    let ctrlBrokerage:FormControl=frmGrp.get('brokerage') as FormControl;
    
    if(ctrlSource.value!=ctrlDestination.value && ctrlBrokerage.value>0){
      return null;
    } else if(ctrlSource.value==ctrlDestination.value && ctrlBrokerage.value>0){
      return {notRequired:true};
    } else if(ctrlSource.value!=ctrlDestination.value && ctrlBrokerage.value==0){
      return {required:true};
    } else{
      return null;
    }
  }
}
