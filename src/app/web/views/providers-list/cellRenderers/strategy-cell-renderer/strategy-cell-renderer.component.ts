import { Component } from '@angular/core';

@Component({
  selector: 'app-strategy-cell-renderer',
  templateUrl: './strategy-cell-renderer.component.html',
  styleUrl: './strategy-cell-renderer.component.scss'
})
export class StrategyCellRendererComponent {

  params: any;

  // This method is required for ag-Grid to pass parameters to the component
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

}
