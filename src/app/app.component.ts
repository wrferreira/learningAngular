import { SignalRService } from './shared/services/signalR.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cancela';

  constructor(private signalRService: SignalRService){
  }

  ngOnInit(): void {
    this.signalRService.connect();

    // setTimeout(() => {
    //   this.signalRService.abrirCancela();
    // }, 6000);
  }
}
