import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AuthGuard } from './auth.guard';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { CartComponent } from './cart/cart.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {IndexComponent} from './index/index.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReportComponent } from './report/report.component';
import { RouteHomeComponent } from './route-home/route-home.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  { path: '', component: RouteHomeComponent },
  { path: 'home', component: IndexComponent, canActivate: [AuthGuard] },
  { path: 'farmer-registration', component: FarmerRegistrationComponent , canActivate: [AuthGuard] },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },

  // ADMIN ROUTINGS
  { path: 'add-product', component: AddProductComponent},
  { path: 'update-product', component: UpdateProductComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'report', component: ReportComponent},


  // FARMER ROUTINGS //
  { path: 'farmer-dashboard', component: FarmerDashboardComponent},
  { path: 'buy-product', component: BuyProductComponent},
  { path: 'cart', component: CartComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'wish-list', component: WishListComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
