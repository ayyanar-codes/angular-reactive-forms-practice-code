import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

/*
  Not working
*/

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styles: 'small{color:red} .addressBlock{border: 2px solid gray;width: fit-content;padding: 5px;border-radius: 10px;margin-bottom:5px}'
})
export class AppComponent implements OnInit {
  title = '27.custom-validation-form-array';
  genderLoopup:any[]=[{key:1,value:"Male"}, {kay:2,value:"Female"}];
  userForm!:FormGroup;

  ngOnInit(): void {
    this.userForm=new FormGroup({
      name:new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      gender:new FormControl('0', fnValidateSelection()),
      address:new FormArray([this.getNewAddressForm()])
    })
  }

  getNewAddressForm():FormGroup{
    return new FormGroup({
      addressType:new FormControl('0', fnValidateSelection()),
      line1:new FormControl('', Validators.required),
      line2:new FormControl('', Validators.required),
      city:new FormControl('0', fnValidateSelection())
    })
  }

  getAddressControl(index: number, controlName: string): FormControl {
    let addressFormGroup:FormArray=this.userForm.get('address') as FormArray;
    return addressFormGroup.controls.at(index)?.get(controlName) as FormControl;
  }

  get address():FormGroup[]{
    return (this.userForm.get('address') as FormArray).controls as FormGroup[];
  }
  
  fnAddNewAddress(){
    let fromArr:FormArray=this.userForm.get('address') as FormArray;
    fromArr.push(fnValidateSelection());
  }

  fnRemoveAddress(){
    let fromArr:FormArray=this.userForm.get('address') as FormArray;
    fromArr.removeAt(fromArr.length - 1);
  }

  fnSubmitForm(){
    alert(JSON.stringify(this.userForm.value));
  }

  

}


export function fnValidateSelection():ValidatorFn{
  return (ctrl:AbstractControl):ValidationErrors|null=>{

    let control:FormControl=ctrl as FormControl;

    if(control.value==0){return {required:true}}

    return null;
  }
}
