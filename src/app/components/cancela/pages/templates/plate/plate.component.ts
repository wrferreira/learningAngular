import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-plate',
  templateUrl: './plate.component.html',
  styleUrls: ['./plate.component.scss']
})
export class PlateComponent implements OnInit, OnChanges{

  @Input () plate : String;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.plate) {
      console.log(changes.plate);
    }
  }

  ngOnInit(): void {

  }

}
