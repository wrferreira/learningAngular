import { BaseRequestResult } from './../models/BaseRequestResult.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrlMottu = environment.baseUrlMottu;

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  login(user: any) {
    return this.http.post(this.baseUrlMottu + 'api/v1/IAM/authentication', user).pipe(map((response: BaseRequestResult<any>) => {          
      if (response.dataResult) {
        localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/cancela']);
      }
      return response;
    }));
  }

  logout() {    
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
