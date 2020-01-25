import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhrmTableComponent } from './dhrm-table.component';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [DhrmTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TableModule,
    MultiSelectModule,
    PaginatorModule
  ],
  exports: [DhrmTableComponent]
})
export class DhrmTableModule { }
