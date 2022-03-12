import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancela',
  templateUrl: './cancela.component.html',
  styleUrls: ['./cancela.component.scss']
})
export class CancelaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  @HostListener('document:keydown', ['$event'])
  handleKeyBoardEvent(event: KeyboardEvent){
    // console.log(event)
    // if(event.code == 'Space'){
    //   this.router.navigate(['/cancela/loading'])
    // }
    // if(event.code == 'Enter'){
    //   this.router.navigate(['/cancela/options'])
    // }
  }

  ngOnInit(): void {
  }

}
