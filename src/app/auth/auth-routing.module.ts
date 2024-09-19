import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const AUTH_ROUTES: Routes = [
  {
      path: '',
      children: [
          {
              path: 'auth/login',
              component: LoginComponent,
              data: {
                  title: 'Login'
              }
          },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
