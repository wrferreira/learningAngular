import { Component, Input, OnInit } from '@angular/core';
import { CancelaLastRegister, CancelaResponseEvent } from 'src/app/shared/models/Cancela.model';
import {ChangeDetectorRef } from '@angular/core';
import { SignalRService } from 'src/app/shared/services/signalR.service';
import { VeiculoSituacao } from 'src/app/shared/enum/veiculo.enum';

@Component({
  selector: 'app-details-motorcycle',
  templateUrl: './details-motorcycle.component.html',
  styleUrls: ['./details-motorcycle.component.scss']
})
export class DetailsMotorcycleComponent implements OnInit {

  @Input() onlyPlate: boolean = false;
  @Input() dataVehicle:CancelaLastRegister;
  public placaLength = 7;
  public veiculoSituacao = VeiculoSituacao;
  public cancelaResponseEvt: CancelaResponseEvent;
  
  constructor(
    private cd: ChangeDetectorRef,
    private signalRService: SignalRService
  ) { }

  ngOnInit(): void {
    console.log(this.dataVehicle)
    this.cancelaResponseEvt = this.signalRService.cancelaResponse
  }
  
  ngAfterContentChecked() {
    this.cd.detectChanges();
  }
}
