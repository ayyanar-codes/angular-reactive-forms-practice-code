import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '28.custom-validation-form-array-example2';
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

  xCount:number=0;
  myForm!:FormGroup;
  isDisableRemoveBtn:boolean=false;
  
  get colorControls() {
    return (this.myForm.get('colors') as FormArray).controls;
  }

  ngOnInit(): void {
    this.myForm=new FormGroup({
      colors:new FormArray([
        this.fnAddFormGroup()
      ], fromArrayValidation())
    },formGroupValidation() )
  }

  get frmArrayElem():FormArray{
    return this.myForm.get('colors') as FormArray;
  }

  getArrayElement(index: number):FormGroup{
    let addressFormGroup:FormArray=this.myForm.get('colors') as FormArray;
    return addressFormGroup.controls.at(index) as FormGroup
  }


  fnAddFormGroup():FormGroup{
    return new FormGroup({
      name:new FormControl((++this.xCount).toString()),
      line1:new FormControl('', Validators.required),
      line2:new FormControl('', Validators.required),
      city:new FormControl(0, requiredValidationForSelect())
    })
  }

  getAddressControl(index: number, controlName: string): FormControl {
    let addressFormGroup:FormArray=this.myForm.get('colors') as FormArray;
    return addressFormGroup.controls.at(index)?.get(controlName) as FormControl;
  }

  fnAddNew(){
    let arrForm:FormArray=this.myForm.get('colors') as FormArray;
    arrForm.push(this.fnAddFormGroup())
    this.isDisableRemoveBtn=false;
    console.log(this.myForm.value);
  }

  fnRemove(){
    let arrForm:FormArray=this.myForm.get('colors') as FormArray;
    if(arrForm.length==1){this.isDisableRemoveBtn=true;} 
    if(arrForm.length>0){arrForm.removeAt(0)}
  }

  fnSubmit(){
    console.log(this.myForm);
  }

  
}

export function requiredValidationForSelect():ValidatorFn{
  return(ctrl:AbstractControl):ValidationErrors|null =>{

    let formCtrl=ctrl as FormControl;

    if(formCtrl.value>0){return null}
    else {return {required:true}}
  }
}

export function fromArrayValidation():ValidatorFn{
  return(ctrl:AbstractControl):ValidationErrors|null =>{

    let formArray=ctrl as FormArray;

    for(let frm of formArray.controls){
      let frmGroup:FormGroup=frm as FormGroup;
      if(!frmGroup.valid){
        return {invalid:true}
      }
    }
    return null;
  }
}

export function formGroupValidation():ValidatorFn{
  return(ctrl:AbstractControl):ValidationErrors|null =>{
    let forGroup=ctrl as FormGroup;
    let formArray=forGroup.get('colors') as FormArray;

    for(let frm of formArray.controls){
      let frmGroup:FormGroup=frm as FormGroup;
      if(!frmGroup.valid){
        return {invalid:true}
      }
    }
    return null;
  }
}
