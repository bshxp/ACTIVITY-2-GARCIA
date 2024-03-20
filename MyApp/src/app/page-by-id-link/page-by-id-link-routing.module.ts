import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageByIdLinkPage } from './page-by-id-link.page';

const routes: Routes = [
  {
    path: '',
    component: PageByIdLinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageByIdLinkPageRoutingModule {}
