import { Component, OnInit } from '@angular/core';
import {CafeService} from "../service/cafe.service";
import {Cafe} from "../model/Cafe";

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrl: './cafe-list.component.css'
})
export class CafeListComponent implements OnInit{
  constructor(private cafeService: CafeService) {}

  coffees : Array<Cafe> = [];

  getCoffes (){
    this.cafeService.getCoffees().subscribe(coffees => {
      this.coffees = coffees;
    });
  }

  ngOnInit() {
    this.getCoffes();
  }
}
