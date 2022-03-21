import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-motorcycle',
  templateUrl: './details-motorcycle.component.html',
  styleUrls: ['./details-motorcycle.component.scss']
})
export class DetailsMotorcycleComponent implements OnInit {

  @Input () onlyPlate: boolean = false;

  public directions = [
    {id: 1, text: 'Entrada'},
    {id: 2, text: 'Saída'},
  ];
  public veiculo = {
    placa: 'EAI2E19',
    situacao: 'Pronta pra aluguel',
    chassi: 'WERTYUCVBNHJKVBNMGHJFGHJK'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
