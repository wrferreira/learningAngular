import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualOptionsComponent } from './pages/cancela-servico/manual-options/manual-options.component';
import { ReadingErrorComponent } from './pages/reading-error/reading-error.component';
import { ManualEntryComponent } from './pages/cancela-servico/manual-entry/manual-entry.component';
import { ReadingSuccessComponent } from './pages/reading-success/reading-success.component';
import { InitialComponent } from './pages/initial/initial.component';
import { LoadingComponent } from './pages/loading/loading.component';
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
        path: 'servico', component: ManualEntryComponent
      },
      {
        path: 'options', component: ManualOptionsComponent
      },
      {
        path: 'readingerror', component: ReadingErrorComponent
      },
      {
        path: 'successful', component: ReadingSuccessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelaRoutingModule { }
