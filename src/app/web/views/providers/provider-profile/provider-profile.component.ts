import { Component } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../../shared/action-button/action-button.component';
import { TypeCellRenderer } from '../../../shared/type-cell-renderer/type-cell-renderer.component';
import { StatusBtnRendererComponent } from '../../../shared/status-btn-renderer/status-btn-renderer.component';

@Component({
  selector: 'app-provider-profile',
  templateUrl: './provider-profile.component.html',
  styleUrl: './provider-profile.component.scss'
})
export class ProviderProfileComponent {

  SubsRows = [
    { name: "Amit Test", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456789", equity: "$56.7", registered: "9/16/24, 7:02:20 AM"},
    { name: "John Doe", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456712", equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { name: "Alice Smith", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456713", equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { name: "Bob Johnson", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456714", equity: "$23.6", registered: "9/21/24, 9:45:50 AM"},
    { name: "Charlie Brown", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456715", equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { name: "Diana Lee", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456716", equity: "$67.8", registered: "9/25/24, 5:50:22 PM"},
    { name: "Evan Thomas", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456717", equity: "$48.1", registered: "9/26/24, 8:16:35 AM"}
  ];
  

  OffersRows =   [
    { Id:1, title: "Test Offer", visibility: "Public", subscriptions: 'Count: 1', joinLinks: "Count: 1" },
  ]

  // Column Definitions: Defines the columns to be displayed.
  SubsCols: ColDef[] = [
    { field: "name" , headerName:'Name',resizable: false , suppressSizeToFit: true ,width:180},
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

  OffersCols: ColDef[] = [
    { field: "title" , headerName:'Title',resizable: false ,width: 200},
    { field: "visibility" , headerName : 'Visibility',resizable: false,width: 200, cellRenderer:TypeCellRenderer,cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'}},
    { field: "subscriptions" ,headerName:'Subscriptions',resizable: false,width: 200},
    { field: "joinLinks",headerName:'Join Links' ,resizable: false,width: 150 },
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent,flex:1
    },
  ];

}
