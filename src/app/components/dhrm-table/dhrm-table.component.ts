import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dhrm-table',
  templateUrl: './dhrm-table.component.html',
  styleUrls: ['./dhrm-table.component.scss']
})
export class DhrmTableComponent implements OnInit {

  cars: any[];

  constructor() { }

  ngOnInit() {
      this.cars = [
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 2, 'year': 2, 'brand': 2, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'}
      ];
  }

}
