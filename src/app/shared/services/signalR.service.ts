import { Injectable } from "@angular/core";
import { HubConnection, HubConnectionBuilder, IHttpConnectionOptions} from '@aspnet/signalr';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class SignalRService {

    private baseUrl = environment.baseUrl;
    private hubConnectionMonitor: HubConnection;

    connect(token){
        const options: IHttpConnectionOptions = {
            accessTokenFactory: () => {
                return token;
            }
        };

        let builder = new HubConnectionBuilder();
        this.hubConnectionMonitor = builder.withUrl(this.baseUrl + 'usuarioSuporte', options).build();

        this.hubConnectionMonitor.on('Logout', (param: any) => {
            console.log(param);            
        });

        this.startConnection(token);
    }

    async startConnection(token: string) {
        await this.hubConnectionMonitor
        .start()
        .then(() => {
            this.hubConnectionMonitor.send("Subscribe", token);
        })
        .catch(() => {
            setTimeout(function() { this.startConnectionMonitor(); }, 5000);
        });
    }

    disconnect(){
        if(this.hubConnectionMonitor) 
            this.hubConnectionMonitor.stop();
    }
}