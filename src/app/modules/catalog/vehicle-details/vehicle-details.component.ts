import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {

  vehicleName:string="";
  vehicleDesc:string="";
  vehicleId:number=0;

  constructor(private router : ActivatedRoute) { 
    this.router.params.subscribe( params => {
        alert(params['id']);
        this.vehicleId = +params['id'];
      })
  }

  ngOnInit(): void {
  }

}
