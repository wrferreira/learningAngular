import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-and-exit',
  templateUrl: './enter-and-exit.component.html',
  styleUrls: ['./enter-and-exit.component.scss']
})

export class EnterAndExitComponent implements OnInit {
  tiles = [
    {text: 'Entrada', color: this.color()},
    {text: 'Saída', color: this.color()},
  ];

  // tiles = [
  //   {text: 'One', color: this.color()},
  //   {text: 'Two', color: this.color()},
  //   {text: 'Three', color: this.color()},
  //   {text: 'Four', cols: 2, rows: 1, color: this.color()},
  //   {text: 'One', color: this.color()},
  //   {text: 'Two', color: this.color()},
  //   {text: 'Three', color: this.color()},
  //   {text: 'Four', cols: 2, rows: 1, color: this.color()},
  //   {text: 'One', color: this.color()},
  //   {text: 'Two', color: this.color()},
  //   {text: 'Three', color: this.color()},
  //   {text: 'Four', cols: 2, rows: 1, color: this.color()},
  // ];

  constructor() { }

  ngOnInit(): void {
  }

  // color(opacity = 0.4) {
  //   let r = Math.random() * 255;

  //   let g = Math.random() * 255;

  //   let b = Math.random() * 255;

  //   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  // }

  // color() {
  //   let opacity = Math.random() * 9;
  //   return `rgba(${0}, ${177}, ${49}, 0.${opacity.toFixed()})`;
  // }

  // color() {
  //   return `rgba(${250}, ${250}, ${250})`
  // }

  color() {
    return `rgba(${0}, ${177}, ${49}, ${0.7})`
  }
}
