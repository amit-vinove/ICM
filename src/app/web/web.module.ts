import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AccountComponent } from './views/account/account.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { WebLayoutComponent } from './layout/web-layout/web-layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    WebLayoutComponent,
    HomeComponent,
    AccountComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    WebRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
  
})
export class WebModule { }
