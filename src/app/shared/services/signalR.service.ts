import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions} from '@aspnet/signalr';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SignalRService {

  private baseUrl = environment.signalR;
  private hubConnectionMonitor: HubConnection;
  
  connect(){
    let builder = new HubConnectionBuilder();
    this.hubConnectionMonitor = builder.withUrl(this.baseUrl).build();
    this.hubConnectionMonitor.start()

    this.hubConnectionMonitor.on('DadosCancela', (param: any) => {
      console.log('DadosCancela', param);
    });

    this.hubConnectionMonitor.on('RequestEvent', (param: any) => {
      console.log('RequestEvent', param);
    });

    this.hubConnectionMonitor.on('ResponseEvent', (param: any) => {
      console.log('ResponseEvent', param);
    });

    this.hubConnectionMonitor.on('CancelaAbrindo', (param: any) => {
      console.log('CancelaAbrindo', param);
    });

    this.hubConnectionMonitor.on('CancelaFechada', (param: any) => {
      console.log('CancelaFechada', param);
    });

    
  }

  abrirCancela(){
    this.hubConnectionMonitor.send('AbreCancela').then(result => console.log('AbreCancela: ', result))
  }

  // async startConnection(token: string) {
  //   await this.hubConnectionMonitor
  //   .start()
  //   .then(() => {
  //     this.hubConnectionMonitor.send("Subscribe", token);
  //   })
  //   .catch(() => {
  //     setTimeout(function() { this.startConnectionMonitor(token); }, 5000);
  //   });
  // }

  disconnect(){
    if(this.hubConnectionMonitor) 
      this.hubConnectionMonitor.stop();
  }
}