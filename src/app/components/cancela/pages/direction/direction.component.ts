import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss']
})

export class DirectionComponent implements OnInit {

  public directions = [
    {id: 1, text: 'Entrada'},
    {id: 2, text: 'Saída'},
  ];

  plate: string = 'BRA 0S21';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  chooseDirection(directionId: number){
    this.router.navigate(['/cancela/options'])
  }
}
