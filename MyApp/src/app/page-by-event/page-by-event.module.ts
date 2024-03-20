import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageByEventPageRoutingModule } from './page-by-event-routing.module';

import { PageByEventPage } from './page-by-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageByEventPageRoutingModule
  ],
  declarations: [PageByEventPage]
})
export class PageByEventPageModule {}
