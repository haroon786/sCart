import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  { path: 'itemdashboard', loadChildren: () => import('./listdasboard/listdasboard.module').then(m => m.ListdasboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
