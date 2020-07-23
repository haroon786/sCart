import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListdasboardComponent } from './listdasboard.component';

const routes: Routes = [{ path: '', component: ListdasboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListdasboardRoutingModule { }
