import { Component, OnInit, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { DialogErrorComponent } from '../../dialogs/error/dialog-error.component';
import { ComponentType } from '@angular/cdk/portal';
import { DialogSuccessComponent } from '../../dialogs/success/dialog-success.component';


@Component({
  selector: 'app-manual-options',
  templateUrl: './manual-options.component.html',
  styleUrls: ['./manual-options.component.scss']
})
export class ManualOptionsComponent implements OnInit {
  
  public directionSelected: number;
  public optionSelected: number;
  public plateFormControl = new FormControl('');
  public error:string = '';
  public optionsCancela = [];  
  public optionList = OPCOES_CANCELA;
  public showLoading: boolean;
  public showDetails: boolean;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  onDirectionSelected(){
    this.optionsCancela = this.optionList.filter(opt => opt.direcao == this.directionSelected)
    this.optionSelected = null
  }
  
  reset() {
    this.plateFormControl.setValue("")
  }

  searchVehicle(){
    this.showDetails = true;
    this.openDialog(true)
  }

  openDialog(searchSuccess: boolean) {
    let component:ComponentType<any>;
    component = searchSuccess
    ? DialogSuccessComponent
    : DialogErrorComponent

    const dialogRef = this.dialog.open(component, {
      width: '330px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


const OPCOES_CANCELA = [
  { id:0, direcao: 0, descricao: 'Lavagem'},
  { id:1, direcao: 0, descricao: 'Suporte de rua'},
  { id:2, direcao: 1, descricao: 'Suporte de rua'},
  { id:3, direcao: 0, descricao: 'Dar baixa de B.O'},
  { id:4, direcao: 1, descricao: 'Dar baixa de B.O'},
  { id:5, direcao: 1, descricao: 'Uso administrativo'},
  { id:6, direcao: 1, descricao: 'Uso administrativo'},
  { id:7, direcao: 0, descricao: 'Entrega para cliente'},
  { id:8, direcao: 1, descricao: 'Realizar manutenção'},
  { id:9, direcao: 0, descricao: 'Distribuição'},
];
