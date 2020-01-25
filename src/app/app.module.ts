import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DhrmTableModule } from './components/dhrm-table/dhrm-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DhrmTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
