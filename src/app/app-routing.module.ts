import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignListComponent} from "./components/sign-list/sign-list.component";
import {SignComponent} from "./components/sign/sign.component";
import {SorrowscopeComponent} from "./components/sorrowscope/sorrowscope.component";


const routes: Routes = [
  {path: '', component: SignListComponent, data: {animation: 'isTop', mobileAnimation: 'isLeft'}},
  {path: 'sign/:signName', component: SorrowscopeComponent, data: {animation: 'isBottom', mobileAnimation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
