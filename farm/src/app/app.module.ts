import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { MainMenuComponent } from './main-menu/main-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    IndexComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
