import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-home',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

