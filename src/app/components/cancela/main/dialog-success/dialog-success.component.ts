import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-success',
  templateUrl: './dialog-success.component.html',
  styleUrls: ['./dialog-success.component.scss']
})
export class DialogSuccessComponent implements OnInit {
  timer: any = 10;

  constructor() { }

  ngOnInit(): void {
    this.countdown()
  }

  countdown() {
    let interval = setInterval(() => {
      this.timer--;
      if (this.timer === 1) {
        setTimeout(() => {
          clearInterval(interval);
         //TODO: Criar redirecionamento para a tela inicial
        }, 1000);
      }
    }, 1000);
  };

}
