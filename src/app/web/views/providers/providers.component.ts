import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { NicknameRendererComponent } from './cellRenderers/nickname-renderer/nickname-renderer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent {

  readonly newProviderDialog = inject(MatDialog);

  rowData =   [
    { Id:1, nickname: "Amit Test", tradingAccount: "11003456789", strategyMode: 'All', equity: "$56.7", registered: "9/16/24, 7:02:20 AM",actionUrl:"/providers-profile/" },
    { Id:2,nickname: "John Doe", tradingAccount: "11003456712", strategyMode: 'All', equity: "$34.5", registered: "9/18/24, 10:12:40 AM" ,actionUrl:"/providers-profile/"},
    { Id:3,nickname: "Alice Smith", tradingAccount: "11003456713", strategyMode: 'All', equity: "$78.9", registered: "9/20/24, 2:23:18 PM",actionUrl:"/providers-profile/" },
    { Id:4,nickname: "Bob Johnson", tradingAccount: "11003456714", strategyMode: 'All', equity: "$23.6", registered: "9/21/24, 9:45:50 AM" ,actionUrl:"/providers-profile/"},
    { Id:5,nickname: "Charlie Brown", tradingAccount: "11003456715", strategyMode: 'All', equity: "$92.3", registered: "9/23/24, 11:34:12 AM",actionUrl:"/providers-profile/" },
    { Id:6,nickname: "Diana Lee", tradingAccount: "11003456716", strategyMode: 'All', equity: "$67.8", registered: "9/25/24, 5:50:22 PM",actionUrl:"/providers-profile/" },
    { Id:7,nickname: "Evan Thomas", tradingAccount: "11003456717", strategyMode: 'All', equity: "$48.1", registered: "9/26/24, 8:16:35 AM" ,actionUrl:"/providers-profile/"}
  ]

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "nickname" , headerName:'Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: NicknameRendererComponent},
    { field: "tradingAccount" , headerName : 'Trading Account',resizable: false},
    { field: "strategyMode" ,headerName:'Strategy Mode',resizable: false},
    { field: "equity",headerName:'Equity' ,resizable: false },
    { field: "registered" , headerName:'Registered',resizable: false,flex:1},
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent,flex:1
    },
  ];

  openNewProviderDialog(){
    const dialogRef = this.newProviderDialog.open(BeProviderDialog,{
      panelClass: 'newProvider-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'newProvider-dialog',
  templateUrl: './dialogBox/newProviderDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeProviderDialog {}
