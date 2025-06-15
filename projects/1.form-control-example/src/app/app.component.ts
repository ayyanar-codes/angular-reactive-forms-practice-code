import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'frmControl';
  firstNameControl!:FormControl;
  lastNameControl!:FormControl;

  ngOnInit(): void {
    this.firstNameControl=new FormControl(),
    this.lastNameControl=new FormControl()
  }
  


}
