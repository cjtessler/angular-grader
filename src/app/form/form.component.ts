import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  v1?: number;
  v2?: number;
  v3?: number;
  sum?: number;
  showResults: boolean = false;

  ngOnInit(): void {
  }

  collectUserData(form: NgForm) {
    console.log(form.value);
    this.v1 = Number(form.value["t1"]);
    this.v2 = Number(form.value["t2"]);
    this.v3 = Number(form.value["t3"]);
    this.sum = this.v1 + this.v2 + this.v3;
    this.showResults = true;

    console.log(this.v1, this.v2, this.v3);
  }

  clearUserData(form: NgForm) {
    // this.v1 =  Number();
    // this.v2 =  Number();
    // this.v3 =  Number();
    // this.sum = Number();
    this.showResults = false;
  }

  

}
