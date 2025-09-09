import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-recover',
    imports: [
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ],
    templateUrl: './recover.component.html',
    styleUrl: './recover.component.css'
})
export default class RecoverComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}

