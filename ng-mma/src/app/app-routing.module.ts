import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'purchase-unit',
    title: 'Purchase Unit',
    loadChildren: () =>
      import('./pages/purchase-unit/purchase-unit.module').then(
        (m) => m.PurchaseUnitModule
      ),
  },
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
