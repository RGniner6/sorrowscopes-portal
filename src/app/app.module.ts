import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignListComponent } from './components/sign-list/sign-list.component';
import { SignComponent } from './components/sign/sign.component';

@NgModule({
  declarations: [
    AppComponent,
    SignListComponent,
    SignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
