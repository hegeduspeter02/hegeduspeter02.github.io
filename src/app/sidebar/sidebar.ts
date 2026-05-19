import { Component, OnInit } from '@angular/core';
import { TranslocoPipe, translate } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-sidebar',
  imports: [
    ButtonModule,
    DrawerModule,
    MenuModule,
    RippleModule,
    TranslocoPipe,
  ],
  templateUrl: './sidebar.html',
})
export class Sidebar implements OnInit {
  visible: boolean = false;
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: translate('about.me'),
        icon: 'pi pi-user',
      },
      {
        label: translate('portfolio'),
        icon: 'pi pi-briefcase',
      },
      {
        label: translate('contact.me'),
        icon: 'pi pi-phone',
      },
    ];
  }
}
