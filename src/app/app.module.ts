import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from './service/services.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule.forRoot(),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
