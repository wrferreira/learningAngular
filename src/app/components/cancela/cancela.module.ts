import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CancelaRoutingModule } from './cancela-routing.module';
import { CancelaComponent } from './cancela.component';
import { InitialComponent } from './pages/initial/initial.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { ManualEntryComponent } from './pages/manual-entry/manual-entry.component';
import { DialogSuccessComponent } from './pages/dialogs/success/dialog-success.component';
import { ReadingErrorComponent } from './pages/reading-error/reading-error.component';
import { ManualOptionsComponent } from './pages/manual-options/manual-options.component';
import { DialogErrorComponent } from './pages/dialogs/error/dialog-error.component';
import { PlateComponent } from './pages/templates/plate/plate.component';
import { ChassiComponent } from './pages/templates/chassi/chassi.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [
    CancelaComponent,
    InitialComponent,
    LoadingComponent,
    ManualEntryComponent,
    DialogSuccessComponent,
    DialogErrorComponent,
    ReadingErrorComponent,
    ManualOptionsComponent, 
    PlateComponent, 
    ChassiComponent
  ],
  imports: [
    CommonModule,
    CancelaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatCarouselModule.forRoot()
  ]
})
export class CancelaModule { }
