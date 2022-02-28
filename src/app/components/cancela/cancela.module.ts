import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelaRoutingModule } from './cancela-routing.module';
import { CancelaComponent } from './main/cancela.component';
import { InitialComponent } from './main/initial/initial.component';
import { LoadingComponent } from './main/loading/loading.component';
import { EnterAndExitComponent } from './main/enter-and-exit/enter-and-exit.component';
import { DialogSuccessComponent } from './main/dialog-success/dialog-success.component';
import { ReadingPlateErrorComponent } from './main/reading-plate-error/reading-plate-error.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CancelaComponent, InitialComponent, LoadingComponent, EnterAndExitComponent, DialogSuccessComponent, ReadingPlateErrorComponent],
  imports: [
    CommonModule,
    CancelaRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CancelaModule { }
