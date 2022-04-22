import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRequestResult } from 'src/app/shared/models/BaseRequestResult.model';
import { SignalRService } from 'src/app/shared/services/signalR.service';
import { CancelaService } from 'src/app/shared/services/cancela.services';
import { CancelaLastRegister, CancelaResponseEvent, CancelaResponseEventInfo } from 'src/app/shared/models/Cancela.model';
import { CancelaData } from 'src/app/shared/models/Cancela.model';
import { CancelaDataService } from '../../cancela.service';

@Component({
  selector: 'app-reading-success',
  templateUrl: './reading-success.component.html',
  styleUrls: ['./reading-success.component.scss']
})
export class ReadingSuccessComponent implements OnInit {

  public dataVehicle:CancelaLastRegister
  public showLoading:boolean;
  public dadosCancela:CancelaData;
  public infoConsulta:CancelaResponseEventInfo;
  public cancelaResponseEvt: CancelaResponseEvent

  constructor(
    private cancelaService: CancelaService,
    private signalRService: SignalRService,
    private activateRoute: ActivatedRoute,
    private cancelaDataService: CancelaDataService
  ) { 
    this.dadosCancela = this.signalRService.dadosCancela;
    this.cancelaResponseEvt = this.signalRService.cancelaResponse;
  } 

  ngOnInit(): void {    
    this.activateRoute.queryParams.subscribe((params) => {
      console.log(params)
      params.veiculoId
      ? this.getDataVehicle(params)
      : this.getLastRegister()
    });
  }

  getDataVehicle(params){
    console.log('tem param')
    this.showLoading = true;
    this.cancelaService.getLastRegister(this.dadosCancela).subscribe((response:BaseRequestResult<CancelaLastRegister>) => {
      this.dataVehicle = response.dataResult;
      this.infoConsulta = params.cancela == 'true' ? DATA_SUCCESS : DATA_FAIL;
      this.infoConsulta.listaErros = this.dataVehicle.erros;
      params.cancela == 'true' ? this.signalRService.abrirCancela() : false;
      this.showLoading = false;
    }, () => this.showLoading = false)
  }

  getLastRegister(){
    console.log('Não tem param')
    this.showLoading = true
    if(!this.dadosCancela) {
      this.dadosCancela = { cancelaId:3, tipo: 0, sentido: 10 }
      this.cancelaResponseEvt = EVT
    }
    this.cancelaService.getLastRegister(this.dadosCancela).subscribe((response:BaseRequestResult<CancelaLastRegister>) => {
      this.dataVehicle = response.dataResult;
      this.infoConsulta = this.cancelaResponseEvt?.cancelaLiberada ? DATA_SUCCESS : DATA_FAIL;
      this.infoConsulta.listaErros = this.dataVehicle.erros;
      this.showLoading = false;
    }, () => this.showLoading = false)
  }
}

const DATA_SUCCESS:CancelaResponseEventInfo = {
  icon: 'check_circle_outline',
  title: 'Tudo certo!',
  message: 'Cancela liberada',
  listaErros: [],
  status: 'ok'
}
const DATA_FAIL:CancelaResponseEventInfo = {
  icon: 'error_outline',
  title: 'Erro de validação!',
  message: 'Não foi possível liberar a cancela',
  listaErros: [],
  status: 'error'
}
const EVT:CancelaResponseEvent = {
  cancelaLiberada: false,
  clienteNome: '',
  erros: ['Não foi feito o checklist', 'Não foi feita a Manutenção'],
  id: 123,
  leituraBruta: null,
  placa: 'EVT-1H33',
  placaUrl: null,
  veiculoId: 111,
  veiculoSituacao: 200
}