import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseRequestResult } from 'src/app/shared/models/BaseRequestResult.model';
import { CancelaLastRegister, CancelaRegistroManual } from 'src/app/shared/models/Cancela.model';
import { CancelaService } from 'src/app/shared/services/cancela.services';
import { SignalRService } from 'src/app/shared/services/signalR.service';
import { CancelaData } from 'src/app/shared/models/Cancela.model';
import { CancelaDataService } from '../../cancela.service';

@Component({
  selector: 'app-reading-error',
  templateUrl: './reading-error.component.html',
  styleUrls: ['./reading-error.component.scss']
})
export class ReadingErrorComponent implements OnInit {
  public plateFormControl = new FormControl('');
  public dataRegister = new CancelaRegistroManual();
  public dataCancela = new CancelaData();
  public showLoading: boolean;
  public error:string = '';
  public searchPlate:string = '';
  public placaLength = 7;

  constructor(
    private router: Router,
    private cancelaService: CancelaService,
    private signalRService: SignalRService,
    private cancelaDataService: CancelaDataService
  ) {}

  ngOnInit(): void {
    this.plateFormControl.valueChanges.subscribe(value => {
      if (/\W|_/.test(value)) this.plateFormControl.setValue(value.substring(0, value.length - 1))
    });
  }

  valid(){
    const plate = /[A-Za-z]{3}[0-9][A-Za-z0-9][0-9]{2}/;
    if(plate.test(this.plateFormControl.value) && this.plateFormControl.value.length == 7 || this.plateFormControl.value.length == 17){
      this.error = "";
    }
    else this.error = this.plateFormControl.value.length >= 8 ?  "Chassi inválido" : "Placa inválida";
  }
  reset() {
    this.plateFormControl.setValue("")
  }

  sendPlate(){
    this.dataCancela = this.signalRService.dadosCancela;

    this.plateFormControl.value.length == 7
    ? this.dataRegister.placa = this.setPlate()
    : this.dataRegister.chassi = this.plateFormControl.value;
    this.dataRegister.cancelaId = this.dataCancela.cancelaId;
    this.dataRegister.tipo = this.dataCancela.tipo;
    this.dataRegister.sentido = this.dataCancela.sentido;
    
    this.sendManualRegister();
  }

  sendManualRegister(){
    this.showLoading = true;
    this.cancelaService.setManualRegister(this.dataRegister).subscribe((response:BaseRequestResult<CancelaLastRegister>) => {
      this.showLoading = false;
      if(response.dataResult){
        this.cancelaDataService.setDataVehicle(response.dataResult);
        this.router.navigate(['/cancela/successful'], { queryParams: { veiculoId: response.dataResult.veiculoId, cancela:response.dataResult.cancelaLiberada }});
      } else{
        this.error = 'Ocorreu um erro na consulta.'
      }
    }, () => this.showLoading = false)
  }

  setPlate(): string {
    if (this.plateFormControl.value.length == 7) {
      const endPlate = this.plateFormControl.value.slice(3, this.plateFormControl.value.length)
      const initialPlate = this.plateFormControl.value.slice(0, 3)
      this.searchPlate = `${initialPlate}-${endPlate}`
    }
    return this.searchPlate.toUpperCase();
  }
}
