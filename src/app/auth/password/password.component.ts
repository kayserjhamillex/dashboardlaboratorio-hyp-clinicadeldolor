import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-password',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './password.component.html',
    styleUrl: './password.component.css'
})
export default class PasswordComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

