import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageByEventPage } from './page-by-event.page';

const routes: Routes = [
  {
    path: '',
    component: PageByEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageByEventPageRoutingModule {}
