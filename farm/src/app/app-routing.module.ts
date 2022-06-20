import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  { path: 'farmer-registration', component: FarmerRegistrationComponent },
  { path: 'home', component: IndexComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
