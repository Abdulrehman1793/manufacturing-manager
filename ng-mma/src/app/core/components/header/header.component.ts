import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menus: Menu[] = [];
  selectedMenu1: Menu[] = [];

  ngOnInit(): void {
    this.menus = [
      { title: 'Dashboard', route: 'dashboard' },
      {
        title: 'Master`s',
        route: 'master',
        children: [
          { title: 'Raw Goods', route: 'raw-goods' },
          { title: 'Finished Goods', route: 'finished-goods' },
          { title: 'Cost', route: 'cost' },
          { title: 'Product Type', route: 'product-type' },
          { title: 'Purchase Unit', route: 'purchase-unit' },
          { title: 'Staff & Resources', route: 'staff' },
          { title: 'Customer', route: 'customer' },
        ],
      },
      {
        title: 'Settings',
        children: [{ title: 'Unit Of Measures', route: 'uom' }],
      },
    ];
  }

  openMenu(menu: Menu) {
    this.selectedMenu1 = menu.children || [];
  }
}

interface Menu {
  title: string;
  route?: string;
  children?: Menu[];
}
