import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {

  colDefs: ColDef[] = []

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.initializeColDefs();
    });
    this.initializeColDefs(); 
  }
  initializeColDefs() {
    this.colDefs = [
      { field: "title", headerName: this.translate.instant('ACCOUNTS.Title'), resizable: false , width: 250, suppressSizeToFit: true},
      {
        field: 'type',
        headerName: this.translate.instant('ACCOUNTS.Type'), headerClass:'type-header',
        cellStyle: {display: 'flex', 'justify-content': 'center','flex-direction':'column'},resizable: false , width: 140,maxWidth:140
      },
      { field: "tradingAccount", headerName: this.translate.instant('ACCOUNTS.Trading Account'), resizable: false , width: 200,maxWidth:250 },
      { field: "balance", headerName: this.translate.instant('ACCOUNTS.Balance'), resizable: false, width: 150,maxWidth:150  },
      { field: "equity", headerName:this.translate.instant('ACCOUNTS.Equity'), resizable: false , width: 150,maxWidth:150 },
      { field: "connected", headerName: this.translate.instant('ACCOUNTS.Connected'), resizable: false, width: 220,maxWidth:220  },
      {
        field: "actions",
        headerName: "",
        cellRenderer: ActionButtonComponent,flex:1
      },
    ];
  }

  rowData = [
    { title: "Amit Test", type: "Main", tradingAccount: 64950, balance: 90, equity: "$56.7", connected: "9/16/24, 7:02:20 AM" },
    { title: "John Doe", type: "Main", tradingAccount: 23500, balance: 75, equity: "$62.3", connected: "9/25/24, 8:12:35 AM" },
    { title: "Jane Smith", type: "Main", tradingAccount: 18700, balance: 82, equity: "$98.7", connected: "9/24/24, 3:45:20 PM" },
    { title: "Samuel Green", type: "Main", tradingAccount: 45600, balance: 65, equity: "$42.8", connected: "9/23/24, 9:14:10 AM" },
    { title: "Lucy Brown", type: "Main", tradingAccount: 39000, balance: 72, equity: "$75.5", connected: "9/20/24, 1:30:45 PM" },
    { title: "Michael Lee", type: "Main", tradingAccount: 50000, balance: 88, equity: "$39.2", connected: "9/18/24, 4:20:50 AM" },
    { title: "Sophia White", type: "Main", tradingAccount: 72000, balance: 95, equity: "$83.4", connected: "9/22/24, 11:42:33 AM" },
    { title: "Oliver Black", type: "Main", tradingAccount: 31000, balance: 58, equity: "$27.9", connected: "9/19/24, 6:10:28 PM" }
  ];

}
