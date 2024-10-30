import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AccountComponent } from './views/account/account.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { ProvidersComponent } from './views/providers/providers.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { ProviderProfileComponent } from './views/providers/provider-profile/provider-profile.component';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';
import { OffersComponent } from './views/offers/offers.component';
import { ProvidersListComponent } from './views/providers-list/providers-list.component';
import { ReportsComponent } from './views/reports/reports.component';

const WEB_ROUTES: Routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        title: "ICM | Home"

      },
      {
        path: 'account',
        component: AccountComponent,
        title: "ICM | Account"

      },
      {
        path: 'providers',
        component: ProvidersComponent,
        title: "ICM | Providers"

      },
      {
        path: 'providers-profile/:providerId',
        component: ProviderProfileComponent,
        title: "ICM | Providers"

      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        title: "ICM | Transactions"

      },
      {
        path: 'subscriptions/:profileId',
        component: SubscriptionsComponent,
        title: "ICM | Subscriptions"

      },
      {
        path: 'offers/:offerId',
        component: OffersComponent,
        title: "ICM | Offers"

      },
      {
        path: 'providersList',
        component: ProvidersListComponent,
        title: "ICM | Providers List"
      },
      {
        path: 'reports',
        component: ReportsComponent,
        title: "ICM | Reports"
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(WEB_ROUTES)],
  exports: [RouterModule],
})
export class WebRoutingModule { }
