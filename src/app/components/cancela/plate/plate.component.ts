import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit {
  @Input () plate : String;
  constructor() { }

  ngOnInit(): void {

  }

}
