import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export default class LoginComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

