import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'cancela', loadChildren: () => import('./components/cancela/cancela.module').then(m => m.CancelaModule)
  },  
  { 
    path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) 
  },  
  {
    path: '**', redirectTo: 'cancela'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
