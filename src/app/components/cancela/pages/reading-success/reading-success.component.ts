import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-success',
  templateUrl: './reading-success.component.html',
  styleUrls: ['./reading-success.component.scss']
})
export class ReadingSuccessComponent implements OnInit {
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
