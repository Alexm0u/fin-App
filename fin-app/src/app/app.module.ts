import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosListComponent } from './components/gastos/gastos-list/gastos-list.component';
import { AddGastoComponent } from './components/gastos/add-gasto/add-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosListComponent,
    AddGastoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
