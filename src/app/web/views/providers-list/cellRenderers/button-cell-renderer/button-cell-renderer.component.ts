import { Component } from '@angular/core';

@Component({
  selector: 'app-button-cell-renderer',
  templateUrl: './button-cell-renderer.component.html',
  styleUrl: './button-cell-renderer.component.scss'
})
export class ButtonCellRendererComponent {

  constructor(){

  }

  params: any;

  // AG Grid passes the row data into this method
  agInit(params: any): void {
    this.params = params;
  }

  onActionClick() {
  }
}
