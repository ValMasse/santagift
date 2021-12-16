import { Component, Input, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';

@Component({
  selector: 'app-cadeau-card',
  templateUrl: './cadeau-card.component.html',
  styleUrls: ['./cadeau-card.component.css']
})
export class CadeauCardComponent implements OnInit {

  @Input()
  cadeau !: Cadeau;

  constructor() { }

  ngOnInit(): void {
  }

}
