import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualComponent } from './components/actual/actual.component';
import { IngresosComponent } from './components/ingresos/ingresos.component';

const routes: Routes = [
  {path:'' , component: ActualComponent},
  {path: 'ingresos', component: IngresosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
