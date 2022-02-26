import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CancelaComponent } from './main/cancela.component';


const routes: Routes = [{
  path: '', component: CancelaComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancelaRoutingModule { }
