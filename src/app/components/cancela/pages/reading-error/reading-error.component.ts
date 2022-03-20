import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reading-error',
  templateUrl: './reading-error.component.html',
  styleUrls: ['./reading-error.component.scss']
})
export class ReadingErrorComponent implements OnInit {
  public plateFormControl = new FormControl('')
  public error:string = ''

  constructor() { }

  ngOnInit(): void {
    this.plateFormControl.valueChanges.subscribe(value => {
      if (/\W|_/.test(value)) this.plateFormControl.setValue(value.substring(0, value.length - 1))
    });
  }

  valid(){
    const plate = /[A-Za-z]{3}[0-9][A-Z0-9][0-9]{2}/;
    if(plate.test(this.plateFormControl.value) && this.plateFormControl.value.length == 7 || this.plateFormControl.value.length == 17){
      this.error = "";
    }
    else this.error = this.plateFormControl.value.length >= 8 ?  "Chassi inválido" : "Placa inválida";    
  }
  clear() {
    this.plateFormControl.setValue("")
  }
}
