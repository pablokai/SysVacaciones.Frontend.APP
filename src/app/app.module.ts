import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VacacionesComponent } from './admin/pages/vacaciones/vacaciones.component';
import { VacacionesFormComponent } from './admin/pages/vacaciones-from/vacaciones-from.component';

@NgModule({
  declarations: [
    AppComponent,
    VacacionesComponent,
    VacacionesFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



