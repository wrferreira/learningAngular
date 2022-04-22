import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CancelaLastRegister } from 'src/app/shared/models/Cancela.model';



@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.scss']
})

export class ManualEntryComponent implements OnInit {

  public directions = [
    {id: 1, text: 'Entrada'},
    {id: 2, text: 'Saída'},
  ];
  public veiculo:CancelaLastRegister;
  
  //  = {
  //   placa: 'EAI-2E19',
  //   situacao: 'Pronta pra aluguel',
  //   chassi: 'WERTYUCVBNHJKVBNMGHJFGHJK'
  // }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  chooseDirection(directionId: number){
    this.router.navigate(['/cancela/options'])
  }
}
