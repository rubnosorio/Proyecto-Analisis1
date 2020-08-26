import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { EntregarTareaComponent } from './components/entregar-tarea/entregar-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    EntregarTareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatExpansionModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
