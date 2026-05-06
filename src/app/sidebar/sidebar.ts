import { Component, type OnInit } from '@angular/core';
import type { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-sidebar',
  imports: [
    MenuModule,
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'About me',
        icon: 'pi pi-user',
      },
      {
        label: 'Portfolio',
        icon: 'pi pi-briefcase',
      },
      {
        label: 'Contact me',
        icon: 'pi pi-phone',
      },
    ];
  }
}
