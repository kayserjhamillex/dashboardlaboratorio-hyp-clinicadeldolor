import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

