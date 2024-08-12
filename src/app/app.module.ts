import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';

=======
import { LayoutComponent } from './dashboard/layout/layout.component';
import { AdminModule} from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d

import { AppComponent } from './app.component';
import { VacacionesComponent } from './admin/pages/vacaciones/vacaciones.component';
import { VacacionesFormComponent } from './admin/pages/vacaciones-from/vacaciones-from.component';

@NgModule({
<<<<<<< HEAD
  declarations: [
    AppComponent,
    VacacionesComponent,
    VacacionesFormComponent
=======
  declarations: [AppComponent, LayoutComponent ],
  imports: [
    CommonModule, AppRoutingModule, BrowserModule, AdminModule, HttpClientModule
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



