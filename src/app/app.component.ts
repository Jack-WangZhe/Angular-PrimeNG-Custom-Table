import { Component, OnInit } from '@angular/core';
import { TableColumn } from './common/table-attributes';
import { User } from './common/user';
import { PageableUser } from './common/pageable-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // mockup data
  defaultCols: Array<TableColumn> = [
    new TableColumn('User Id', 'userId', 0),
    new TableColumn('User Name', 'userName', 0)
  ];
  variableCols: Array<TableColumn> = [
    new TableColumn('User Sex', 'userSex', 0),
    new TableColumn('User Signature', 'userSignature', -2),
    new TableColumn('User Age', 'userAge', 0)
  ];

  data: Array<User> = [
    new User('1', 'Jack1', 'Male', 'Happy', 18),
    new User('2', 'Jack2', 'Male', 'Happy', 18),
    new User('3', 'Jack3', 'Male', 'Happy', 18),
    new User('4', 'Jack4', 'Male', 'Happy', 18),
    new User('5', 'Jack5', 'Male', 'Happy', 18),
    new User('6', 'Jack6', 'Male', 'Happy', 18),
    new User('7', 'Jack7', 'Male', 'Happy', 18),
    new User('8', 'Jack8', 'Male', 'Happy', 18),
    new User('9', 'Jack9', 'Male', 'Happy', 18),
    new User('10', 'Jack10', 'Male', 'Happy', 18),
    // new User('11', 'Jack11', 'Male', 'Happy', 18),
    // new User('12', 'Jack12', 'Male', 'Happy', 18),
    // new User('13', 'Jack13', 'Male', 'Happy', 18),
    // new User('14', 'Jack14', 'Male', 'Happy', 18),
    // new User('15', 'Jack15', 'Male', 'Happy', 18),
    // new User('16', 'Jack16', 'Male', 'Happy', 18),
    // new User('17', 'Jack17', 'Male', 'Happy', 18),
    // new User('18', 'Jack18', 'Male', 'Happy', 18),
  ];

  pageableItem: PageableUser = {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 18,
    data: this.data
  };

  /**
   * On table action click
   */
  actionClickResolver(event) {
    console.log(event);
    // TODO
  }

  filterChangeResolver(event) {
    console.log(event);
    // TODO
  }
}
