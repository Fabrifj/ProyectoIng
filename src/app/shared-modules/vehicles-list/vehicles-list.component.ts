import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/models/vehicle.model';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

  listProducts:Vehicle[]=[];
  constructor(private catalogoService : CatalogoService) { }

  ngOnInit(): void {
    this.listProducts = this.catalogoService.getVehicles();
  }

}
