import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DisplayDataComponent} from './components/display-data/display-data.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  {path:'', component: DisplayDataComponent}/*,
  {path:'**', component:ErrorPageComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
