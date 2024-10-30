import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent {

  constructor(private router:Router){

  }

  params: any;

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onActionClick() {
    this.router.navigate([`/providers-profile/${this.params.data.id}`])
  }
}
