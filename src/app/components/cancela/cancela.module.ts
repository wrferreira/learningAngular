import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CancelaRoutingModule } from './cancela-routing.module';
import { CancelaComponent } from './cancela.component';
import { InitialComponent } from './initial/initial.component';
import { LoadingComponent } from './loading/loading.component';
import { DirectionComponent } from './direction/direction.component';
import { DialogSuccessComponent } from './dialogs/success/dialog-success.component';
import { ErrorReadingComponent } from './error-reading/error-reading.component';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ManualEntryComponent } from './manual-entry/manual-entry.component';
import { DialogErrorComponent } from './dialogs/error/dialog-error.component';

@NgModule({
  declarations: [
    CancelaComponent, 
    InitialComponent, 
    LoadingComponent, 
    DirectionComponent, 
    DialogSuccessComponent, 
    DialogErrorComponent, 
    ErrorReadingComponent, 
    SearchComponent, 
    ManualEntryComponent
  ],
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
