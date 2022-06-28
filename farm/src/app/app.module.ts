import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerMenuComponent } from './farmer-menu/farmer-menu.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  declarations: [
    AppComponent,
    FarmerRegistrationComponent,
    IndexComponent,
    MainMenuComponent,
    LoginPageComponent,
    AdminMenuComponent,
    AdminDashboardComponent,
    AddProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    FarmerDashboardComponent,
    FarmerMenuComponent,
    BuyProductComponent,
    CartComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({  
      closeButton: true,  
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'decreasing',
      preventDuplicates: true,
    } ), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
