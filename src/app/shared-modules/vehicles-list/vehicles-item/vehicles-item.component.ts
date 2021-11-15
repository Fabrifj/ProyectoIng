import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.css']
})
export class VehiclesItemComponent implements OnInit {

  vehicleName:string="";
  vehicleDesc:string="";
  vehicleId:number=0;

  constructor() { }

  ngOnInit(): void {
  }

}
