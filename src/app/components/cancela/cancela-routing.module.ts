import { DialogSuccessComponent } from './pages/dialogs/success/dialog-success.component';
import { ManualEntryComponent } from './pages/manual-entry/manual-entry.component';
import { ErrorReadingComponent } from './pages/error-reading/error-reading.component';
import { DirectionComponent } from './pages/direction/direction.component';
import { InitialComponent } from './pages/initial/initial.component';
import { LoadingComponent } from './pages/loading/loading.component';
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
      },
      {
        path: 'success', component: DialogSuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelaRoutingModule { }
