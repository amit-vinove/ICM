import { Component } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrl: './providers.component.scss'
})
export class ProvidersComponent {


  rowData =   [
    { nickname: "Amit Test", tradingAccount: "11003456789", strategyMode: 'All', equity: "$56.7", registered: "9/16/24, 7:02:20 AM" },
    { nickname: "John Doe", tradingAccount: "11003456712", strategyMode: 'All', equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { nickname: "Alice Smith", tradingAccount: "11003456713", strategyMode: 'All', equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { nickname: "Bob Johnson", tradingAccount: "11003456714", strategyMode: 'All', equity: "$23.6", registered: "9/21/24, 9:45:50 AM" },
    { nickname: "Charlie Brown", tradingAccount: "11003456715", strategyMode: 'All', equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { nickname: "Diana Lee", tradingAccount: "11003456716", strategyMode: 'All', equity: "$67.8", registered: "9/25/24, 5:50:22 PM" },
    { nickname: "Evan Thomas", tradingAccount: "11003456717", strategyMode: 'All', equity: "$48.1", registered: "9/26/24, 8:16:35 AM" }
  ]

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "nickname" , headerName:'Nickname' },
    { field: "tradingAccount" , headerName : 'Trading Account'},
    { field: "strategyMode" ,headerName:'Strategy Mode'},
    { field: "equity",headerName:'Equity' },
    { field: "registered" , headerName:'Registered'},
    
  ];

}
