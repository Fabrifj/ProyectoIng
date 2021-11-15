import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-vehicles-item',
  templateUrl: './vehicles-item.component.html',
  styleUrls: ['./vehicles-item.component.css']
})
export class VehiclesItemComponent implements OnInit {

  vehicle : Vehicle|any;
  @Input() vehicleId:number=0 ;

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.vehicle = this.catalogoService.getVehicle(this.vehicleId);
  }

}
