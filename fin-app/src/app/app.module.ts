import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GastosListComponent } from './components/gastos/gastos-list/gastos-list.component';
import { AddGastoComponent } from './components/gastos/add-gasto/add-gasto.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GastosListComponent,
    AddGastoComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
