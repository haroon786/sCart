import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListdasboardRoutingModule } from './listdasboard-routing.module';
import { ListdasboardComponent } from './listdasboard.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
 import { FlexLayoutModule } from "@angular/flex-layout";
 import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [ListdasboardComponent],
  imports: [
    CommonModule,
    ListdasboardRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule
  ]
})
export class ListdasboardModule { }
