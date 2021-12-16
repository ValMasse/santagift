import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauxHttpService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-cadeaux',
  templateUrl: './cadeaux.component.html',
  styleUrls: ['./cadeaux.component.css']
})
export class CadeauxComponent implements OnInit {

  

  cadeaux : Cadeau[] = [];

  constructor(private service: CadeauxHttpService) { }

  ngOnInit(): void {
    this.getCadeaux();
  }

  getCadeaux(){
    this.service.getAll().subscribe(data => {
      this.cadeaux = data;
    });
  }

}
