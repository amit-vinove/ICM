import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { NicknameRendererComponent } from '../providers/cellRenderers/nickname-renderer/nickname-renderer.component';
import { DateAdapter } from '@angular/material/core';
import { MatDateRangePicker } from '@angular/material/datepicker';

export interface User {
  name: string;
}


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  @ViewChild('providerRangePicker') providerRangePicker!: MatDateRangePicker<Date>;
  @ViewChild('offersRangePicker') offersRangePicker!: MatDateRangePicker<Date>;
  @ViewChild('feesRangePicker') feesRangePicker!: MatDateRangePicker<Date>;
  @ViewChild('tradingRangePicker') tradingRangePicker!: MatDateRangePicker<Date>;

  providersSelectedDateRange: string = 'Last 7 days';
  providerStartDate!: Date;
  providersEndDate!: Date;

  offersSelectedDateRange: string = 'Last 7 days';
  offersStartDate!: Date;
  offersEndDate!: Date;

  feesSelectedDateRange: string = 'Last 7 days';
  feesStartDate!: Date;
  feesEndDate!: Date;

  tradingSelectedDateRange: string = 'Last 7 days';
  tradingStartDate!: Date;
  tradingEndDate!: Date;

  constructor(private dateAdapter: DateAdapter<Date>) {
    this.setLast7Days();
  }


  rowData =   [
    { Id:1, nickname: "Amit Test", title:'Amit Test',tradingAccount: "11003456789", strategyMode: 'All', amount: "$56.7", registered: "9/16/24, 7:02:20 AM",actionUrl:"/providers-profile/" },
    { Id:2,nickname: "John Doe", title:'Amit Test',tradingAccount: "11003456712", strategyMode: 'All', amount: "$34.5", registered: "9/18/24, 10:12:40 AM" ,actionUrl:"/providers-profile/"},
    { Id:3,nickname: "Alice Smith",title:'Amit Test' ,tradingAccount: "11003456713", strategyMode: 'All', amount: "$78.9", registered: "9/20/24, 2:23:18 PM",actionUrl:"/providers-profile/" },
    { Id:4,nickname: "Bob Johnson", title:'Amit Test',tradingAccount: "11003456714", strategyMode: 'All', amount: "$23.6", registered: "9/21/24, 9:45:50 AM" ,actionUrl:"/providers-profile/"},
    { Id:5,nickname: "Charlie Brown", title:'Amit Test',tradingAccount: "11003456715", strategyMode: 'All', amount: "$92.3", registered: "9/23/24, 11:34:12 AM",actionUrl:"/providers-profile/" },
    { Id:6,nickname: "Diana Lee",title:'Amit Test' ,tradingAccount: "11003456716", strategyMode: 'All', amount: "$67.8", registered: "9/25/24, 5:50:22 PM",actionUrl:"/providers-profile/" },
    { Id:7,nickname: "Evan Thomas", title:'Amit Test',tradingAccount: "11003456717", strategyMode: 'All', amount: "$48.1", registered: "9/26/24, 8:16:35 AM" ,actionUrl:"/providers-profile/"}
  ]

  providersReportsCol: ColDef[] = [
    { field: "nickname" , headerName:'Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: NicknameRendererComponent,flex:1},
    { field: "amount" , headerName : 'Amount',resizable: false,flex:1},
  ];

  offersReportsCol: ColDef[] = [
    { field: "title" , headerName : 'Title',resizable: false,flex:1},
    { field: "nickname" , headerName:'Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: NicknameRendererComponent,flex:1},
    { field: "amount" ,headerName:'Amount',resizable: false,flex:1},
  ];

  recivedFeesCol: ColDef[] = [
    { field: "title" , headerName:'Name',resizable: false , suppressSizeToFit: true,cellRenderer: NicknameRendererComponent,flex:1},
    { field: "amount" , headerName : 'Fees',resizable: false,flex:1},
    { field: "amount" ,headerName:'Amount',resizable: false,flex:1},
  ];

  publishedCol: ColDef[] = [
    { field: "nickname" , headerName:'Nickname',resizable: false , suppressSizeToFit: true,cellRenderer: NicknameRendererComponent,flex:1},
    { field: "amount" , headerName : 'Count',resizable: false,flex:1},
  ];

  setLast7Days() {
    const today = new Date();
    this.providersEndDate = today;
    this.providerStartDate = new Date();
    this.providerStartDate.setDate(today.getDate() - 6);

    this.offersEndDate = today;
    this.offersStartDate = new Date();
    this.offersStartDate.setDate(today.getDate() - 6);

    this.feesEndDate = today;
    this.feesStartDate = new Date();
    this.feesStartDate.setDate(today.getDate() - 6);

    this.tradingEndDate = today;
    this.tradingStartDate = new Date();
    this.tradingStartDate.setDate(today.getDate() - 6);
  }


  selectProviderDateRange(range: string) {
    const today = new Date();
    this.providersSelectedDateRange = range;
  
    if (range === 'Last month') {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.providerStartDate = firstDayLastMonth;
      this.providersEndDate = lastDayLastMonth;
    } else if (range === 'Last 7 days') {
      this.setLast7Days();
    } else if (range === 'Current month') {
      this.providerStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.providersEndDate = today;
    } else if (range === 'Today') {
      this.providerStartDate = today;
      this.providersEndDate = today;
    } else if (range === 'Custom') {
      // Set start and end dates to today
      this.providerStartDate = today;
      this.providersEndDate = today;
      this.providerRangePicker.open();
    }
  }

  selectOffersDateRange(range: string) {
    const today = new Date();
    this.offersSelectedDateRange = range;
  
    if (range === 'Last month') {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.offersStartDate = firstDayLastMonth;
      this.offersEndDate = lastDayLastMonth;
    } else if (range === 'Last 7 days') {
      this.setLast7Days();
    } else if (range === 'Current month') {
      this.offersStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.offersEndDate = today;
    } else if (range === 'Today') {
      this.offersStartDate = today;
      this.offersEndDate = today;
    } else if (range === 'Custom') {
      // Set start and end dates to today
      this.offersStartDate = today;
      this.offersEndDate = today;
      this.offersRangePicker.open();
    }
  }


  selectFeesDateRange(range: string) {
    const today = new Date();
    this.feesSelectedDateRange = range;
  
    if (range === 'Last month') {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.feesStartDate = firstDayLastMonth;
      this.feesEndDate = lastDayLastMonth;
    } else if (range === 'Last 7 days') {
      this.setLast7Days();
    } else if (range === 'Current month') {
      this.feesStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.feesEndDate = today;
    } else if (range === 'Today') {
      this.feesStartDate = today;
      this.feesEndDate = today;
    } else if (range === 'Custom') {
      // Set start and end dates to today
      this.feesStartDate = today;
      this.feesEndDate = today;
      this.feesRangePicker.open();
    }
  }

  selectTradingDateRange(range: string) {
    const today = new Date();
    this.tradingSelectedDateRange = range;
  
    if (range === 'Last month') {
      const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
      const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      this.tradingStartDate = firstDayLastMonth;
      this.tradingEndDate = lastDayLastMonth;
    } else if (range === 'Last 7 days') {
      this.setLast7Days();
    } else if (range === 'Current month') {
      this.tradingStartDate = new Date(today.getFullYear(), today.getMonth(), 1);
      this.tradingEndDate = today;
    } else if (range === 'Today') {
      this.tradingStartDate = today;
      this.tradingEndDate = today;
    } else if (range === 'Custom') {
      // Set start and end dates to today
      this.tradingStartDate = today;
      this.tradingEndDate = today;
      this.tradingRangePicker.open();
    }
  }
  

}
