import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'cancela', loadChildren: () => import('./components/cancela/cancela.module').then(m => m.CancelaModule)
  },
  {
    path: '**', redirectTo: 'cancela',

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
