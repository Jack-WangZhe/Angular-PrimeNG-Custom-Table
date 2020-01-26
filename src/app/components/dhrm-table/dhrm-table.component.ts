import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { TableColumn, TableAction, SortColumn, TableFilter, PageInfo } from 'src/app/common/table-attributes';
import { PageableBase } from 'src/app/common/pageable-base';
import { Paginator } from 'primeng/paginator';
import { User } from 'src/app/common/user';

@Component({
  selector: 'dhrm-table',
  templateUrl: './dhrm-table.component.html',
  styleUrls: ['./dhrm-table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DhrmTableComponent implements OnInit, AfterViewInit {

  // table actions, the default actions are following
  @Input()
  actions = [
    { iconName: 'fa fa-eye', title: 'view', type: 'view' },
    { iconName: 'fa fa-edit', title: 'edit', type: 'edit' },
    { iconName: 'fa fa-trash', title: 'delete', type: 'delete' }
  ];
  // default cols to display
  @Input()
  defaultCols: TableColumn[];
  // variable cols to display
  @Input()
  variableCols: TableColumn[];
  // selected columns
  selectedColumns: TableColumn[];
  // pageable item
  @Input()
  pageableItem: PageableBase<any>;

  @Output()
  onActionClick: EventEmitter<TableAction<User>> = new EventEmitter<TableAction<User>>();
  @Output()
  onFilterChange: EventEmitter<TableFilter> = new EventEmitter<TableFilter>();

  @ViewChild('paginator', { static: false })
  paginator: Paginator;

  multiSortMeta: Array<SortColumn> = [];

  constructor() { }

  ngOnInit() {
    this.selectedColumns = this.variableCols;
    this.combineMultiSortMeta();
  }

  ngAfterViewInit(): void {
    this.paginator.onPageChange.subscribe((pageEvent) => {
      const { page, rows } = pageEvent;
      this.onFilterChange.emit(new TableFilter(new PageInfo(page, rows), this.multiSortMeta));
    })
  }

  /**
   * Action item click
   * 
   * @param type action type
   * @param rowData row data
   */
  actionClick(type: string, rowData: User) {
    this.onActionClick.emit(new TableAction<User>(type, rowData));
  }

  /**
   * Combine multi sort meta
   */
  combineMultiSortMeta() {
    [...this.defaultCols, ...this.variableCols].map((col) => {
      if (Math.abs(col.order) === 1) {
        this.multiSortMeta.push({
          field: col.field,
          order: col.order
        });
      }
    });
  }

  /**
   * Multi sort change
   */
  multiSortChange(event) {
    if (event.multiSortMeta[0].length) {
      return;
    }
    let changeExistSortItem = false;
    this.multiSortMeta = this.multiSortMeta.map((col) => {
      if (col.field === event.multiSortMeta[0]["field"]) {
        col.order = event.multiSortMeta[0]["order"];
        changeExistSortItem = true;
      }
      return col;
    });
    if (!changeExistSortItem) {
      this.multiSortMeta.push({
        field: event.multiSortMeta[0]["field"],
        order: event.multiSortMeta[0]["order"]
      });
    }
    this.onFilterChange.emit(
      new TableFilter(new PageInfo(this.pageableItem.pageIndex, this.pageableItem.pageSize), this.multiSortMeta));
  }
}
