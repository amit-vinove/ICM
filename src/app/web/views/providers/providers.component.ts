import { Component } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { NicknameRendererComponent } from './cellRenderers/nickname-renderer/nickname-renderer.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent {


  rowData =   [
    { Id:1, nickname: "Amit Test", tradingAccount: "11003456789", strategyMode: 'All', equity: "$56.7", registered: "9/16/24, 7:02:20 AM" },
    { Id:2,nickname: "John Doe", tradingAccount: "11003456712", strategyMode: 'All', equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { Id:3,nickname: "Alice Smith", tradingAccount: "11003456713", strategyMode: 'All', equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { Id:4,nickname: "Bob Johnson", tradingAccount: "11003456714", strategyMode: 'All', equity: "$23.6", registered: "9/21/24, 9:45:50 AM" },
    { Id:5,nickname: "Charlie Brown", tradingAccount: "11003456715", strategyMode: 'All', equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { Id:6,nickname: "Diana Lee", tradingAccount: "11003456716", strategyMode: 'All', equity: "$67.8", registered: "9/25/24, 5:50:22 PM" },
    { Id:7,nickname: "Evan Thomas", tradingAccount: "11003456717", strategyMode: 'All', equity: "$48.1", registered: "9/26/24, 8:16:35 AM" }
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

}
