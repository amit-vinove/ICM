import { Component } from '@angular/core';

@Component({
  selector: 'app-provider-list-profile-type-cell-renderer',
  templateUrl: './provider-list-profile-type-cell-renderer.component.html',
  styleUrl: './provider-list-profile-type-cell-renderer.component.scss'
})
export class ProviderListProfileTypeCellRendererComponent {
  constructor(){

  }

  params: any;

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

}
