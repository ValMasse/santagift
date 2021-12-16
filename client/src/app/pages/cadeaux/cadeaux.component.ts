import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauxHttpService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-cadeaux',
  templateUrl: './cadeaux.component.html',
  styleUrls: ['./cadeaux.component.css']
})
export class CadeauxComponent implements OnInit {  

  // Liste vide que l'on va remplir
  cadeaux : Cadeau[] = [];

  constructor(private cadeauService: CadeauxHttpService) { }

  ngOnInit(): void {
    this.cadeauService.getAll().subscribe(cadeaux => this.cadeaux = cadeaux);
    console.log(this.cadeaux);
  }

  

}
