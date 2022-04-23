import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-cancela',
  templateUrl: './cancela.component.html',
  styleUrls: ['./cancela.component.scss']
})
export class CancelaComponent implements OnInit {

  public displayHeader:boolean;

  constructor(    
    private authService: AuthService    
  ) { } 

  ngOnInit(): void {
  }

  activatedRoute(event){
    this.displayHeader = (event.constructor.name != 'IdleComponent' && event.constructor.name != 'LoadingComponent') ? true : false;
  }

  logout(){
    this.authService.logout();
  }
}
