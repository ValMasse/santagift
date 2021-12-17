import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadeau-form',
  templateUrl: './cadeau-form.component.html',
  styleUrls: ['./cadeau-form.component.css']
})
export class CadeauFormComponent implements OnInit {

  cadeauForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.cadeauForm = this.formBuilder.group({
      name:"",
      urlImage:"",
      seller:""
    })
   }


  ngOnInit(): void {
  }

}
