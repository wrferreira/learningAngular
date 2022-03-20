import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-reading',
  templateUrl: './error-reading.component.html',
  styleUrls: ['./error-reading.component.scss']
})
export class ErrorReadingComponent implements OnInit {
  plateFormControl = new FormControl('')
  error = ''

  constructor() { }

  ngOnInit(): void {
    this.plateFormControl.valueChanges.subscribe(value => {
      if (/\W|_/.test(value)) this.plateFormControl.setValue(value.substring(0, value.length - 1))
    });
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
  clear() {
    this.plateFormControl.setValue("")
  }
}
