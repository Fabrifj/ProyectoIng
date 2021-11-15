import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './modules/catalog/catalog.component';
import { VehicleDetailsComponent } from './modules/catalog/vehicle-details/vehicle-details.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      { path: 'catalog-vehicles', component: VehicleDetailsComponent },
     ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
