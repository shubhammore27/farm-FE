import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import {IndexComponent} from './index/index.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UpdateProductComponent } from './update-product/update-product.component';

const routes: Routes = [
  // { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'farmer-registration', component: FarmerRegistrationComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'login', component: LoginPageComponent},

  // ADMIN ROUTINGS
  { path: 'add-product', component: AddProductComponent},
  { path: 'update-product', component: UpdateProductComponent},
  { path: 'product-list', component: ProductListComponent},


  // FARMER ROUTINGS //
  { path: 'farmer-dashboard', component: FarmerDashboardComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
