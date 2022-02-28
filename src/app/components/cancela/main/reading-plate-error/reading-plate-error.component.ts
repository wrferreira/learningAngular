import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reading-plate-error',
  templateUrl: './reading-plate-error.component.html',
  styleUrls: ['./reading-plate-error.component.scss']
})
export class ReadingPlateErrorComponent implements OnInit {
  plateFormControl = new FormControl('')
  error = ''

  constructor() { }

  ngOnInit(): void {
  }

  valid(){
    let plate = /[A-Za-z]{3}[0-9][A-Z0-9][0-9]{2}/;
    if(plate.test(this.plateFormControl.value) && this.plateFormControl.value.length == 7 || this.plateFormControl.value.length == 17){
      this.error = "";
    }
    else {
      this.plateFormControl.value.length >= 8 ? this.error = "Chassi inválido" : this.error = "Placa inválida";
    }
  }
}
