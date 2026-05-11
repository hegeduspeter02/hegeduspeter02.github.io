import { Component, OnInit } from '@angular/core';
import { translate } from '@jsverse/transloco';
import { MenuItem } from 'primeng/api';
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
