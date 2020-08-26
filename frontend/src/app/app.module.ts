import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogoComponent } from './components/dialogo/dialogo.component';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule, // <--- Aquí
    BrowserAnimationsModule, // <--- Aquí
    MatButtonModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogoComponent// <--- Aquí
  ]
})
export class AppModule { }
