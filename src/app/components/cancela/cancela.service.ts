import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CancelaLastRegister } from 'src/app/shared/models/Cancela.model';

@Injectable({
  providedIn: 'root'
})
export class CancelaDataService {

  public vehicle:CancelaLastRegister;

  constructor() { }

  setDataVehicle(vehicle:CancelaLastRegister){

    this.vehicle = vehicle;
  }
  
  get dataVehicle(){    
    return this.vehicle;
  }
}
