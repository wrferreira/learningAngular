import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public passwordType:string = 'password';
  public showLoader: boolean = false;
  public form:FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required),
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  setPasswordView() {
    this.passwordType = this.passwordType == 'text' ? 'password' : 'text';
  }

  login() {
    this.showLoader = true;
    this.authService.login(this.form.value).subscribe((data) => {
      this.showLoader = false;
    },
    (error) => {
      this.showLoader = false;      
    });
  }
}
