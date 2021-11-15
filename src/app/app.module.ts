import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { VehiclesComponent } from './shared-modules/vehicles/vehicles.component';
import { VehiclesListComponent } from './shared-modules/vehicles-list/vehicles-list.component';
import { VehiclesItemComponent } from './shared-modules/vehicles-list/vehicles-item/vehicles-item.component';
import { LoginComponent } from './modules/login/login.component';
import { FootPageComponent } from './foot-page/foot-page.component';
import { CatalogComponent } from './modules/catalog/catalog.component';
import { VehicleDetailsComponent } from './modules/catalog/vehicle-details/vehicle-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    VehiclesComponent,
    VehiclesListComponent,
    VehiclesItemComponent,
    VehicleDetailsComponent,
    LoginComponent,
    FootPageComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
