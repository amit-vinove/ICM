import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'status-cell-renderer',
  templateUrl:'./type-cell-renderer.component.html',
  styleUrls: ['./type-cell-renderer.component.scss']
})
export class TypeCellRenderer implements ICellRendererAngularComp {
  public value: string = '';
  public valueFormatted: string = '';

  agInit(params: ICellRendererParams): void {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted!;
  }

  refresh(params: ICellRendererParams): boolean {
    this.value = params.value;
    this.valueFormatted = params.valueFormatted!;
    return true;
  }
}