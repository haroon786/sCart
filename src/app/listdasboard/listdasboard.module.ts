import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdasboardRoutingModule } from './listdasboard-routing.module';
import { ListdasboardComponent } from './listdasboard.component';


@NgModule({
  declarations: [ListdasboardComponent],
  imports: [
    CommonModule,
    ListdasboardRoutingModule
  ]
})
export class ListdasboardModule { }
