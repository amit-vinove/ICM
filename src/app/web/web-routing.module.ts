import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AccountComponent } from './views/account/account.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';

const WEB_ROUTES: Routes = [
  {
      path: '',
      component:WebLayoutComponent,
      children: [
          {
              path: 'home',
              component: HomeComponent,
              data: {
                  title: 'Home'
              }
          },
          {
            path: 'account',
            component: AccountComponent,
            data: {
                title: 'Account'
            }
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(WEB_ROUTES)],
  exports: [RouterModule],
})
export class WebRoutingModule { }
