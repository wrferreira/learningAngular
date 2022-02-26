import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelaRoutingModule } from './cancela-routing.module';
import { CancelaComponent } from './main/cancela.component';
import { InitialComponent } from './main/initial/initial.component';
import { LoadingComponent } from './main/loading/loading.component';
import { EnterAndExitComponent } from './main/enter-and-exit/enter-and-exit.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [CancelaComponent, InitialComponent, LoadingComponent, EnterAndExitComponent],
  imports: [
    CommonModule,
    CancelaRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDividerModule
  ]
})
export class CancelaModule { }
