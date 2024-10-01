import { Component } from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  rowData = [
    { nickname: "Amit Test", fees: "$34.0", followers: 64950, followerGrowth: 90, closedProfit: "$56.7", registered: "9/16/24, 7:02:20 AM" },
    { nickname: "John Doe", fees: "$45.2", followers: 23500, followerGrowth: 75, closedProfit: "$62.3", registered: "9/25/24, 8:12:35 AM" },
    { nickname: "Jane Smith", fees: "$67.1", followers: 18700, followerGrowth: 82, closedProfit: "$98.7", registered: "9/24/24, 3:45:20 PM" },
    { nickname: "Samuel Green", fees: "$23.4", followers: 45600, followerGrowth: 65, closedProfit: "$42.8", registered: "9/23/24, 9:14:10 AM" },
    { nickname: "Lucy Brown", fees: "$50.0", followers: 39000, followerGrowth: 72, closedProfit: "$75.5", registered: "9/20/24, 1:30:45 PM" },
    { nickname: "Michael Lee", fees: "$28.9", followers: 50000, followerGrowth: 88, closedProfit: "$39.2", registered: "9/18/24, 4:20:50 AM" },
    { nickname: "Sophia White", fees: "$38.4", followers: 72000, followerGrowth: 95, closedProfit: "$83.4", registered: "9/22/24, 11:42:33 AM" },
    { nickname: "Oliver Black", fees: "$19.6", followers: 31000, followerGrowth: 58, closedProfit: "$27.9", registered: "9/19/24, 6:10:28 PM" }
  ];
  
 
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "nickname" , headerName:'Nickname',resizable:false },
    { field: "fees" , headerName : 'Fees',resizable:false},
    { field: "followers" ,headerName:'Followers',resizable:false},
    { field: "followerGrowth",headerName:'Follower Growth',resizable:false },
    { field: "closedProfit" , headerName:'Closed Profit',resizable:false},
    { field: "registered" , headerName:'Registered',resizable:false,flex:100},

  ];

}
