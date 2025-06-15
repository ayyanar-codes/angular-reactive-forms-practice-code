import { Component, OnInit } from '@angular/core';
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
  title = 'frmControl2';
  firstName!:FormControl
  lastName!:FormControl

  ngOnInit(): void {
    this.firstName=new FormControl("Ayyanar");
    this.lastName=new FormControl()
    this.lastName.setValue('A');
  }

}
