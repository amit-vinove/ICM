import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { NicknameRendererComponent } from '../providers/cellRenderers/nickname-renderer/nickname-renderer.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly beProviderDialog = inject(MatDialog);
  readonly beFollowerDialog = inject(MatDialog);


  constructor(public translate: TranslateService) {
    
  }
  // Define the row data for the grid
  rowData = [
    { id:1, nickname: "Amit Test", fees: "$34.0", followers: 64950, followerGrowth: 90, closedProfit: "$56.7", registered: "9/16/24, 7:02:20 AM" , actionUrl:"/providers-profile/" },
    { id:2,nickname: "John Doe", fees: "$45.2", followers: 23500, followerGrowth: 75, closedProfit: "$62.3", registered: "9/25/24, 8:12:35 AM" ,actionUrl:"/providers-profile/" },
    { id:3,nickname: "Jane Smith", fees: "$67.1", followers: 18700, followerGrowth: 82, closedProfit: "$98.7", registered: "9/24/24, 3:45:20 PM",actionUrl:"/providers-profile/"  },
    { id:3,nickname: "Samuel Green", fees: "$23.4", followers: 45600, followerGrowth: 65, closedProfit: "$42.8", registered: "9/23/24, 9:14:10 AM",actionUrl:"/providers-profile/"  },
    { id:4,nickname: "Lucy Brown", fees: "$50.0", followers: 39000, followerGrowth: 72, closedProfit: "$75.5", registered: "9/20/24, 1:30:45 PM",actionUrl:"/providers-profile/"  },
    { id:4,nickname: "Michael Lee", fees: "$28.9", followers: 50000, followerGrowth: 88, closedProfit: "$39.2", registered: "9/18/24, 4:20:50 AM",actionUrl:"/providers-profile/"  },
    { id:5,nickname: "Sophia White", fees: "$38.4", followers: 72000, followerGrowth: 95, closedProfit: "$83.4", registered: "9/22/24, 11:42:33 AM",actionUrl:"/providers-profile/"  },
    { id:6,nickname: "Oliver Black", fees: "$19.6", followers: 31000, followerGrowth: 58, closedProfit: "$27.9", registered: "9/19/24, 6:10:28 PM",actionUrl:"/providers-profile/"  }
  ];

  // Define the columns, including the ActionButtonComponent in the last column
  colDefs: ColDef[] = [
    { field: "nickname", headerName: 'Nickname', resizable: false , width: 250, suppressSizeToFit: true,cellRenderer: NicknameRendererComponent},
    { field: "fees", headerName: 'Fees', resizable: false , width: 140,maxWidth:140 },
    { field: "followers", headerName: 'Followers', resizable: false , width: 150,maxWidth:150 },
    { field: "followerGrowth", headerName: 'Follower Growth', resizable: false, width: 170,maxWidth:170  },
    { field: "closedProfit", headerName: 'Closed Profit', resizable: false , width: 150,maxWidth:150 },
    { field: "registered", headerName: 'Registered', resizable: false, width: 250,maxWidth:250  },
    {
      field: "actions",
      headerName: "",
      cellRenderer: ActionButtonComponent,flex:1
    },
  ];
  
  openBeProviderDialog(){
    const dialogRef = this.beProviderDialog.open(BeProviderDialog,{
      panelClass: 'beProvider-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openBeFollowerDialog(){
    const dialogRef = this.beFollowerDialog.open(BeFollowerDialog,{
      panelClass: 'beFollower-dialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}


@Component({
  selector: 'beProvider-dialog',
  templateUrl: './dialogBox/beProviderDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeProviderDialog {}

@Component({
  selector: 'beFollower-dialog',
  templateUrl: './dialogBox/beFollowerDialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatInputModule,MatSelectModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BeFollowerDialog {}
