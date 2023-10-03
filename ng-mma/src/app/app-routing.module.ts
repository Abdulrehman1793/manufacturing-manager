import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'raw-goods',
    title: 'Raw goods',
    loadChildren: () =>
      import('./pages/raw-goods/raw-goods.module').then(
        (m) => m.RawGoodsModule
      ),
  },
  {
    path: 'finished-goods',
    title: 'Finished goods',
    loadChildren: () =>
      import('./pages/finished-goods/finished-goods.module').then(
        (m) => m.FinishedGoodsModule
      ),
  },
  {
    path: 'cost',
    title: 'Cost',
    loadChildren: () =>
      import('./pages/cost/cost.module').then((m) => m.CostModule),
  },
  {
    path: 'product-type',
    title: 'Product Type',
    loadChildren: () =>
      import('./pages/product-type/product-type.module').then(
        (m) => m.ProductTypeModule
      ),
  },
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
