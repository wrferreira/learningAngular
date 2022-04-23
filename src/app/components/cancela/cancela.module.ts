import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { CancelaRoutingModule } from './cancela-routing.module';
import { CancelaComponent } from './cancela.component';
import { IdleComponent } from './pages/idle/idle.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { DialogSuccessComponent } from './pages/dialogs/success/dialog-success.component';
import { DialogErrorComponent } from './pages/dialogs/error/dialog-error.component';
import { ReadingErrorComponent } from './pages/reading-error/reading-error.component';
import { ManualOptionsComponent } from './pages/cancela-servico/manual-options/manual-options.component';
import { PlateComponent } from './pages/cancela-servico/templates/plate/plate.component';
import { ChassiComponent } from './pages/cancela-servico/templates/chassi/chassi.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DetailsMotorcycleComponent } from './pages/details-motorcycle/details-motorcycle.component';
import { ReadingSuccessComponent } from './pages/reading-success/reading-success.component';

@NgModule({
  declarations: [
    CancelaComponent,
    IdleComponent,
    LoadingComponent,
    DialogSuccessComponent,
    DialogErrorComponent,
    ReadingErrorComponent,
    ManualOptionsComponent, 
    PlateComponent, 
    ChassiComponent, 
    DetailsMotorcycleComponent, 
    ReadingSuccessComponent
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
