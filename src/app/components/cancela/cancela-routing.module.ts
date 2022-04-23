import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManualOptionsComponent } from './pages/cancela-servico/manual-options/manual-options.component';
import { ReadingErrorComponent } from './pages/reading-error/reading-error.component';
import { ReadingSuccessComponent } from './pages/reading-success/reading-success.component';
import { IdleComponent } from './pages/idle/idle.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { CancelaComponent } from './cancela.component';


const routes: Routes = [
  {
    path: '',
    component: CancelaComponent,
    children: [
      {
        path: '', component: IdleComponent
      },
      {
        path:'loading', component: LoadingComponent
      },
      {
        path: 'servico', component: ManualOptionsComponent
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
