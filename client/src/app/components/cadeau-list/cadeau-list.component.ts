import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {

  // liste de cadeaux sur laquelle on fait le forEach
  @Input() cadeaux : Cadeau[] = [];

  constructor() { }

  ngOnInit(): void {
  }



  

}
