import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { ViewTheaterComponent } from './view-theater/view-theater.component';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddTheaterComponent,
    ViewTheaterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
