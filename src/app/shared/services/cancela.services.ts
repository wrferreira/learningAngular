import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { BaseRequestResult } from "../models/BaseRequestResult.model";

@Injectable({
    providedIn: 'root'
})
export class CancelaService {
    private cancelaId = 0
    private cancelaTipo = 0
    private baseUrlMottu = environment.baseUrlMottu;
    
    constructor(
        private http: HttpClient
    ) { }

    registroManual(): Observable<BaseRequestResult<any>>{
        return this.http.get<BaseRequestResult<any>>(this.baseUrlMottu + `api/v2/mottuapi/cancela/registroManual`);
    }
    //cancela/Front/{cancelaId}/{tipo}/{id}
    getUltimoRegistro(id = 0): Observable<BaseRequestResult<any>>{
        return this.http.get<BaseRequestResult<any>>(this.baseUrlMottu + `api/v2/cancela/Front/${this.cancelaId}/${this.cancelaTipo}/${id}`);
    }

}