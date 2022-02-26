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
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
    {text: 'One'},
    {text: 'Two'},
    {text: 'Three'},
    {text: 'Four'},
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  color() {
    return `rgba(${250}, ${250}, ${250})`
  }

  // color() {
  //   return `rgba(${0}, ${177}, ${49}, ${0.7})`
  // }

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
