import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresosComponent } from './components/home/ingresos/ingresos.component';
import { ActualComponent } from './components/home/actual/actual.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ingresos', component: IngresosComponent },
  { path: 'actual', component: ActualComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
