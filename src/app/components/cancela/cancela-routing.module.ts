import { ManualEntryComponent } from './manual-entry/manual-entry.component';
import { ErrorReadingComponent } from './error-reading/error-reading.component';
import { DirectionComponent } from './direction/direction.component';
import { InitialComponent } from './initial/initial.component';
import { LoadingComponent } from './loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelaComponent } from './cancela.component';


const routes: Routes = [
  {
    path: '', 
    component: CancelaComponent,
    children: [
      {
        path: '', component: InitialComponent
      },
      { 
        path:'loading', component: LoadingComponent
      }, 
      {
        path: 'direction', component: DirectionComponent
      },
      {
        path: 'options', component: ManualEntryComponent
      },
      {
        path: 'error', component: ErrorReadingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelaRoutingModule { }
