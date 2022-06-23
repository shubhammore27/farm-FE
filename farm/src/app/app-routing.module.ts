import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'farmer-registration', component: FarmerRegistrationComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
