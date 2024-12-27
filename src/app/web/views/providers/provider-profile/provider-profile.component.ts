import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../../shared/action-button/action-button.component';
import { TypeCellRenderer } from '../../../shared/type-cell-renderer/type-cell-renderer.component';
import { StatusBtnRendererComponent } from '../../../shared/status-btn-renderer/status-btn-renderer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SubsProfileRendererComponent } from '../cellRenderers/subs-profile-renderer/subs-profile-renderer.component';
import { OffersRendererComponent } from '../cellRenderers/offers-renderer/offers-renderer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrl: './provider-profile.component.scss'
})
export class ProviderProfileComponent {

  readonly commonInfoDialog = inject(MatDialog);


  SubsRows = [
    { Id:1, name: "Amit Test", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456789", equity: "$56.7", registered: "9/16/24, 7:02:20 AM"},
    { Id:2,name: "John Doe", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456712", equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { Id:3,name: "Alice Smith", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456713", equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { Id:4,name: "Bob Johnson", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456714", equity: "$23.6", registered: "9/21/24, 9:45:50 AM"},
    { Id:5,name: "Charlie Brown", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456715", equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { Id:6,name: "Diana Lee", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456716", equity: "$67.8", registered: "9/25/24, 5:50:22 PM"},
    { Id:7,name: "Evan Thomas", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456717", equity: "$48.1", registered: "9/26/24, 8:16:35 AM"}
  ];

  // Column Definitions: Defines the columns to be displayed.
  SubsCols: ColDef[] = [
    { field: "name" , headerName:'Name',resizable: false , suppressSizeToFit: true ,width:180,cellRenderer:SubsProfileRendererComponent},
    { field: "status" , headerName : 'Status',width:100,resizable: false,cellRenderer:StatusBtnRendererComponent ,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "volumeScaling" ,headerName:'Volume Scaling',resizable: false,cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "offer",headerName:'Offer' ,resizable: false ,width:150},
    { field: "tradingAccount" , headerName:'Trading Account',resizable: false},
    { field: "equity" , headerName:'Equity',resizable: false,width:120},
    { field: "registered" , headerName:'Registered',resizable: false,width:200},
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent
    },
  ];

  PositionsRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "9/16/24, 9:00 AM", volume: "10", profit: "$500", closeTime: "9/17/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "9/18/24, 10:00 AM", volume: "5", profit: "$350", closeTime: "9/18/24, 4:30 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "9/20/24, 11:00 AM", volume: "8", profit: "$120", closeTime: "9/21/24, 5:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "9/21/24, 12:00 PM", volume: "15", profit: "$700", closeTime: "9/21/24, 6:00 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "9/23/24, 2:00 PM", volume: "12", profit: "$420", closeTime: "9/24/24, 3:30 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "9/25/24, 4:00 PM", volume: "20", profit: "$600", closeTime: "9/26/24, 7:00 PM" }
  ];

  // Column Definitions: Defines the columns to be displayed.
  PositionsCols: ColDef[] = [
    { field: "position" , headerName:'Positions',resizable: false , suppressSizeToFit: true ,width:180},
    { field: "status" , headerName : 'Status',width:100,resizable: false,cellRenderer:StatusBtnRendererComponent ,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "symbol" ,headerName:'Symbol',width:150,resizable: false,cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "openTime",headerName:'Open Time' ,resizable: false ,width:180},
    { field: "volume" , headerName:'Volume',resizable: false},
    { field: "profit" , headerName:'Profit',resizable: false,width:120},
    { field: "closeTime" , headerName:'Close Time',resizable: false,width:200},
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent
    },
  ];


  DealsRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "10/10/24, 9:15 AM", volume: "15", profit: "$650", closeTime: "10/11/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "10/12/24, 10:30 AM", volume: "8", profit: "$280", closeTime: "10/12/24, 3:00 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "10/13/24, 11:45 AM", volume: "10", profit: "$750", closeTime: "10/14/24, 5:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "10/14/24, 1:00 PM", volume: "20", profit: "$900", closeTime: "10/14/24, 6:00 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "10/15/24, 2:30 PM", volume: "25", profit: "$1100", closeTime: "10/16/24, 3:45 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "10/16/24, 3:50 PM", volume: "12", profit: "$500", closeTime: "10/16/24, 7:00 PM" }
  ];

  // Column Definitions: Defines the columns to be displayed.
  DealsCols: ColDef[] = [
    { field: "position" , headerName:'Positions',resizable: false , suppressSizeToFit: true ,width:180},
    { field: "status" , headerName : 'Status',width:100,resizable: false,cellRenderer:StatusBtnRendererComponent ,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "symbol" ,headerName:'Symbol',width:150,resizable: false,cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "openTime",headerName:'Open Time' ,resizable: false ,width:180},
    { field: "volume" , headerName:'Volume',resizable: false},
    { field: "profit" , headerName:'Profit',resizable: false,width:120},
    { field: "closeTime" , headerName:'Close Time',resizable: false,width:200},
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent
    },
  ];


  FeesRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "10/01/24, 9:30 AM", volume: "12", profit: "$450", closeTime: "10/02/24, 4:30 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "10/03/24, 10:00 AM", volume: "7", profit: "$380", closeTime: "10/03/24, 3:45 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "10/04/24, 11:30 AM", volume: "9", profit: "$560", closeTime: "10/05/24, 5:15 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "10/06/24, 1:45 PM", volume: "16", profit: "$800", closeTime: "10/06/24, 6:30 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "10/07/24, 2:00 PM", volume: "18", profit: "$930", closeTime: "10/08/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "10/09/24, 3:15 PM", volume: "22", profit: "$610", closeTime: "10/09/24, 7:45 PM" }
  ];

  // Column Definitions: Defines the columns to be displayed.
  FeesCols: ColDef[] = [
    { field: "position" , headerName:'Positions',resizable: false , suppressSizeToFit: true ,width:180},
    { field: "status" , headerName : 'Status',width:100,resizable: false,cellRenderer:StatusBtnRendererComponent ,cellStyle: {display: 'flex', 'justify-content': 'center','align-items':'center'},headerClass: 'subs-status-header'},
    { field: "symbol" ,headerName:'Symbol',width:150,resizable: false,cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "openTime",headerName:'Open Time' ,resizable: false ,width:180},
    { field: "volume" , headerName:'Volume',resizable: false},
    { field: "profit" , headerName:'Profit',resizable: false,width:120},
    { field: "closeTime" , headerName:'Close Time',resizable: false,width:200},
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent
    },
  ];


  OffersRows =   [
    { Id:1, title: "Test Offer", visibility: "Public", subscriptions: 'Count: 1', joinLinks: "Count: 1" },
  ]

  OffersCols: ColDef[] = [
    { field: "title" , headerName:'Title',resizable: false ,width: 200,cellRenderer:OffersRendererComponent},
    { field: "visibility" , headerName : 'Visibility',resizable: false,width: 200, cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "subscriptions" ,headerName:'Subscriptions',resizable: false,width: 200},
    { field: "joinLinks",headerName:'Join Links' ,resizable: false,width: 150 },
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent,flex:1
    },
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
  imports: [MatDialogModule, MatButtonModule, MatInputModule,MatSelectModule,TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {}
