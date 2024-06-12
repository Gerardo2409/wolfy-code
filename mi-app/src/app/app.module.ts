import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TarjetasModule } from './tarjetas/tarjetas.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    TarjetasModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
