import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessComponent } from '../dialog-success/dialog-success.component';

@Component({
  selector: 'app-enter-and-exit',
  templateUrl: './enter-and-exit.component.html',
  styleUrls: ['./enter-and-exit.component.scss']
})

export class EnterAndExitComponent implements OnInit {
  directions = [
    {id: 1, text: 'Entrada'},
    {id: 2, text: 'Saída'},
  ];

  type: Number = 0;

  actions = [
    {text: 'Lavagem'},
    {text: 'Suporte de rua'},
    {text: 'Dar baixa de B.O'},
    {text: 'Uso administrativo'},
    {text: 'Uso administrativo'},
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogTime(){
    setTimeout(() => {
      this.openDialog()
    }, 500);
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogSuccessComponent, {
      width: '300px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  chooseDirection(value){
    setTimeout(() => {
      this.type = value;
    }, 500);
  }
}
