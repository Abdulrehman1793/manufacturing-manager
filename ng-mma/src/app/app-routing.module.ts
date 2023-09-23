import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UomsComponent } from './pages/uom/uoms/uoms.component';

const routes: Routes = [
  {
    path: 'staff',
    title: 'Staff',
    loadChildren: () =>
      import('./pages/staff/staff.module').then((m) => m.StaffModule),
  },
  {
    path: 'customer',
    title: 'Customer',
    loadChildren: () =>
      import('./pages/customer/customer.module').then((m) => m.CustomerModule),
  },
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
