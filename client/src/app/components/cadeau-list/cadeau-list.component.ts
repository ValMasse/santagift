import { Component, OnInit } from '@angular/core';
import { Cadeau } from 'src/app/models/cadeau';
import { CadeauxHttpService } from 'src/app/services/cadeaux-http.service';

@Component({
  selector: 'app-cadeau-list',
  templateUrl: './cadeau-list.component.html',
  styleUrls: ['./cadeau-list.component.css']
})
export class CadeauListComponent implements OnInit {


  cadeaux : Cadeau[] = [];

  constructor(private service: CadeauxHttpService) { }

  ngOnInit(): void {
    this.getCadeaux();
  }

  getCadeaux(){
    this.service.getAll().subscribe(data => {
      console.log(data);
      this.cadeaux = data;
    });
  }

  

}
