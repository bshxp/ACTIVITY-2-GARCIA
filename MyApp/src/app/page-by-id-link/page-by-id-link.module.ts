import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageByIdLinkPageRoutingModule } from './page-by-id-link-routing.module';

import { PageByIdLinkPage } from './page-by-id-link.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageByIdLinkPageRoutingModule
  ],
  declarations: [PageByIdLinkPage]
})
export class PageByIdLinkPageModule {}
