import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerRegistrationComponent } from './farmer-registration/farmer-registration.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  { path: 'farmer-registration', component: FarmerRegistrationComponent },
  { path: 'home', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
