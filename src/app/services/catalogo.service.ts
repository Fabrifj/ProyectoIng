import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  vehicles: Vehicle[]=[
    new Vehicle(1, "Namw1", "auto"),
    new Vehicle(2, "Namw2", "auto"),
    new Vehicle(3, "Namw3", "auto"),
    new Vehicle(4, "Namw4", "auto"),

  ]

  getVehicles(): import("../models/vehicle.model").Vehicle[] {
    return this.vehicles;
  }
  getVehicle(id:number) {
    let element  =  this.vehicles.find(element => element.Id = id);
    return element;
 
  }

  constructor() { }
}
