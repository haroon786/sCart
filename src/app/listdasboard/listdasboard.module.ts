import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdasboardRoutingModule } from './listdasboard-routing.module';
import { ListdasboardComponent } from './listdasboard.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [ListdasboardComponent],
  imports: [
    CommonModule,
    ListdasboardRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class ListdasboardModule { }
