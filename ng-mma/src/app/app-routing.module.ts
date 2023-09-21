import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UomsComponent } from './pages/uom/uoms/uoms.component';

const routes: Routes = [
  {
    path: 'uom',
    title: 'Unit Of Measurments',
    loadChildren: () =>
      import('./pages/uom/uom.module').then((m) => m.UomModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
