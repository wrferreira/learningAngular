import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessComponent } from '../dialogs/success/dialog-success.component';
import { DialogErrorComponent } from '../dialogs/error/dialog-error.component';

@Component({
  selector: 'app-manual-entry',
  templateUrl: './manual-entry.component.html',
  styleUrls: ['./manual-entry.component.scss']
})
export class ManualEntryComponent implements OnInit {

  public type: number = 0;
  public directions = [
    {id: 1, text: 'Entrada'},
    {id: 2, text: 'Saída'},
  ];
  public actions = [
    {text: 'Lavagem'},
    {text: 'Suporte de rua'},
    {text: 'Dar baixa de B.O'},
    {text: 'Uso administrativo'},
    {text: 'Uso administrativo'},
  ];

  constructor(
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
  }  
    
  openDialog() {
    const dialogRef = this.dialog.open(DialogErrorComponent, {
      width: '330px',
      height: '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  chooseDirection(){    
    this.router.navigate(['/cancela/direction']);
  }

}
