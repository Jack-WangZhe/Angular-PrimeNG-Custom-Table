import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DhrmTableComponent } from './dhrm-table.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DhrmTableComponent],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [DhrmTableComponent]
})
export class DhrmTableModule { }
