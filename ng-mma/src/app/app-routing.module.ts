import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authenticateGuard } from './auth/guards/authenticate.guard';

const routes: Routes = [
  {
    path: 'auth',
    title: 'Authentication',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'master',
    children: [
      {
        path: 'raw-goods',
        title: 'Raw goods',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/raw-goods/raw-goods.module').then(
            (m) => m.RawGoodsModule
          ),
      },
      {
        path: 'finished-goods',
        title: 'Finished goods',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/finished-goods/finished-goods.module').then(
            (m) => m.FinishedGoodsModule
          ),
      },
      {
        path: 'cost',
        title: 'Cost',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/cost/cost.module').then((m) => m.CostModule),
      },
      {
        path: 'product-type',
        title: 'Product Type',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/product-type/product-type.module').then(
            (m) => m.ProductTypeModule
          ),
      },
      {
        path: 'purchase-unit',
        title: 'Purchase Unit',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/purchase-unit/purchase-unit.module').then(
            (m) => m.PurchaseUnitModule
          ),
      },
      {
        path: 'staff',
        title: 'Staff',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/staff/staff.module').then((m) => m.StaffModule),
      },
      {
        path: 'customer',
        title: 'Customer',
        canActivate: [authenticateGuard],
        loadChildren: () =>
          import('./pages/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
    ],
  },
  {
    path: 'uom',
    title: 'Unit Of Measurments',
    canActivate: [authenticateGuard],
    loadChildren: () =>
      import('./pages/uom/uom.module').then((m) => m.UomModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
