import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'dhrm-table',
  templateUrl: './dhrm-table.component.html',
  styleUrls: ['./dhrm-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DhrmTableComponent implements OnInit {

  items: any[];
  cols: any[];
  selectedColumns: any[];
  pageInfo = {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 18
  }

  actions = [
    { iconName: 'fas fa-eye', title: 'view', type: 'view' },
    { iconName: 'fas fa-edit', title: 'edit', type: 'edit' },
    { iconName: 'fas fa-trash', title: 'delete', type: 'delete' }
  ];

  constructor() { }

  ngOnInit() {
      this.items = [
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 2, 'year': 2, 'brand': 2, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'},
        {'vin': 1, 'year': 1, 'brand': 1, 'color': 'red'}
      ];
      this.cols = [
        { field: 'vin', header: 'Vin' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
      ];
      this.selectedColumns = this.cols;
  }

  /**
   * Action item click
   * 
   * @param type action type
   * @param row row data
   */
  onActionClick(type: string, row: any) {
    // TODO
  }

  customSort(event) {
    console.log(event)
  }

}
