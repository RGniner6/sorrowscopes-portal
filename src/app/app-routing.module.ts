import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignListComponent} from "./components/sign-list/sign-list.component";


const routes: Routes = [
  {path: '', component: SignListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
