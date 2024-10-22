import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { TypeCellRenderer } from '../../shared/type-cell-renderer/type-cell-renderer.component';
import { StatusBtnRendererComponent } from '../../shared/status-btn-renderer/status-btn-renderer.component';
import { SubsProfileRendererComponent } from '../providers/cellRenderers/subs-profile-renderer/subs-profile-renderer.component';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {

  readonly commonInfoDialog = inject(MatDialog);

  OffersRows =   [
    { Id:1, key: "ABCD1234", expiration: "10/30/2024", status: 'Active', agent: "test" },
  ]

  OffersCols: ColDef[] = [
    { field: "key" , headerName:'Key',resizable: false ,width: 200},
    { field: "expiration" , headerName : 'Expiration',resizable: false,width: 200},
    { field: "status" ,headerName:'Status',resizable: false,width: 200, cellRenderer:StatusBtnRendererComponent,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "agent",headerName:'Agent' ,resizable: false,width: 150 },
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent,flex:1
    },
  ];

  agentsRows =   [
  ]

  agentsCols: ColDef[] = [
  ];

  openCommonInfoDialog(){
    const dialogRef = this.commonInfoDialog.open(DialogContentExampleDialog,{
      panelClass: 'providerProfile-commonInfo'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'commongInfo-dialog',
  templateUrl: './dialogBoxes/commonInfoDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {}
