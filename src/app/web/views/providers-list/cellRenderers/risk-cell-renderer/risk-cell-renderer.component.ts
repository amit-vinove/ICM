import { Component } from '@angular/core';

@Component({
  selector: 'app-risk-cell-renderer',
  templateUrl: './risk-cell-renderer.component.html',
  styleUrl: './risk-cell-renderer.component.scss'
})
export class RiskCellRendererComponent {

  params: any;

  // This method is required for ag-Grid to pass parameters to the component
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true
  }

}
