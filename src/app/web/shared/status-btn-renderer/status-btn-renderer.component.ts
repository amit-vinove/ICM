import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-status-btn-renderer',
  templateUrl: './status-btn-renderer.component.html',
  styleUrl: './status-btn-renderer.component.scss'
})
export class StatusBtnRendererComponent {
  public value: string = '';

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    return true;
  }
}
