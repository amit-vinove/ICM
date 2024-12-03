import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AccountComponent } from './views/account/account.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AgGridModule } from 'ag-grid-angular';
import { ProvidersComponent } from './views/providers/providers.component';
import { ActionButtonComponent } from './shared/action-button/action-button.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { TypeCellRenderer } from './shared/type-cell-renderer/type-cell-renderer.component';
import { ProviderProfileComponent } from './views/providers/provider-profile/provider-profile.component';
import { NicknameRendererComponent } from './views/providers/cellRenderers/nickname-renderer/nickname-renderer.component';
import { StatusBtnRendererComponent } from './shared/status-btn-renderer/status-btn-renderer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { SubscriptionsComponent } from './views/subscriptions/subscriptions.component';
import { SubsProfileRendererComponent } from './views/providers/cellRenderers/subs-profile-renderer/subs-profile-renderer.component';
import { OffersComponent } from './views/offers/offers.component';
import { OffersRendererComponent } from './views/providers/cellRenderers/offers-renderer/offers-renderer.component';
import { ProvidersListComponent } from './views/providers-list/providers-list.component';
import { ReportsComponent } from './views/reports/reports.component'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatIconModule } from '@angular/material/icon';
import { TypeIconComponent } from './views/providers-list/cellRenderers/type-icon/type-icon.component';
import { StrategyCellRendererComponent } from './views/providers-list/cellRenderers/strategy-cell-renderer/strategy-cell-renderer.component';
import { RiskCellRendererComponent } from './views/providers-list/cellRenderers/risk-cell-renderer/risk-cell-renderer.component';
import { ChartCellRendererComponent } from './views/providers-list/cellRenderers/chart-cell-renderer/chart-cell-renderer.component';


@NgModule({
  declarations: [
    WebLayoutComponent,
    HomeComponent,
    AccountComponent,
    SidenavComponent,
    ProvidersComponent,
    ActionButtonComponent,
    TransactionsComponent,
    TypeCellRenderer,
    ProviderProfileComponent,
    NicknameRendererComponent,
    StatusBtnRendererComponent,
    SubscriptionsComponent,
    SubsProfileRendererComponent,
    OffersComponent,
    OffersRendererComponent,
    ProvidersListComponent,
    ReportsComponent,
    TypeIconComponent,
    StrategyCellRendererComponent,
    RiskCellRendererComponent,
    ChartCellRendererComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    WebRoutingModule,
    AgGridModule,MatInputModule,MatSelectModule,MatFormFieldModule,MatMenuModule,
    MatAutocompleteModule,MatCardModule,NgApexchartsModule,MatNativeDateModule,MatDatepickerModule,MatIconModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  
})
export class WebModule { }
