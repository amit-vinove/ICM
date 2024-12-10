import { Component } from '@angular/core';

@Component({
  selector: 'app-symbol-cell-renderer',
  templateUrl: './symbol-cell-renderer.component.html',
  styleUrl: './symbol-cell-renderer.component.scss'
})
export class SymbolCellRendererComponent {

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
