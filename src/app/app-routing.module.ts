import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routes} from './app.routes'
import { RouterModule, PreloadAllModules } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
