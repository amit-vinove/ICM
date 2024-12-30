import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { ActionButtonComponent } from '../../shared/action-button/action-button.component';
import { TypeCellRenderer } from '../../shared/type-cell-renderer/type-cell-renderer.component';
import { StatusBtnRendererComponent } from '../../shared/status-btn-renderer/status-btn-renderer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrl: './subscriptions.component.scss'
})
export class SubscriptionsComponent {
  subsId: string | null = null;
  SubsCols: ColDef[] = []
  PositionsCols: ColDef[] = []

  constructor(private route: ActivatedRoute,public translate: TranslateService) {}

  ngOnInit(): void {
    // Get route parameters (e.g., /sample/:id)
    this.subsId = this.route.snapshot.paramMap.get('profileId');
    this.translate.onLangChange.subscribe(() => {
      this.initializeColDefs();
    });
    this.initializeColDefs(); 
  }

  initializeColDefs() {
    this.SubsCols = [
      { field: "name", headerName: this.translate.instant('PROVIDERS_PROFILE.Nickname'), resizable: false, suppressSizeToFit: true, width: 180},
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "volumeScaling", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume Scaling'), resizable: false, cellRenderer: TypeCellRenderer, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "offer", headerName: this.translate.instant('PROVIDERS_PROFILE.Offer'), resizable: false, width: 150 },
      { field: "tradingAccount", headerName: this.translate.instant('PROVIDERS_PROFILE.Trading Account'), resizable: false },
      { field: "equity", headerName: this.translate.instant('PROVIDERS_PROFILE.Equity'), resizable: false, width: 120 },
      { field: "registered", headerName: this.translate.instant('PROVIDERS_PROFILE.Registered'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonComponent },
    ];
  
    this.PositionsCols = [
      { field: "position", headerName: this.translate.instant('PROVIDERS_PROFILE.Position'), resizable: false, suppressSizeToFit: true, width: 180 },
      { field: "status", headerName: this.translate.instant('COMMON.Status'), width: 100, resizable: false, cellRenderer: StatusBtnRendererComponent, cellStyle: { display: 'flex', 'justify-content': 'center', 'align-items': 'center' }, headerClass: 'subs-status-header' },
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_PROFILE.Symbol'), width: 150, resizable: false, cellRenderer: TypeCellRenderer, cellStyle: { display: 'flex', 'justify-content': 'center', 'flex-direction': 'column' } },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Open Time'), resizable: false, width: 180 },
      { field: "volume", headerName: this.translate.instant('PROVIDERS_PROFILE.Volume'), resizable: false },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_PROFILE.Profit'), resizable: false, width: 120 },
      { field: "closeTime", headerName: this.translate.instant('PROVIDERS_PROFILE.Close Time'), resizable: false, width: 200 },
      { field: "actions", headerName: "", cellRenderer: ActionButtonComponent },
    ];
  }


  SubsRows = [
    { name: "Amit Test", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456789", equity: "$56.7", registered: "9/16/24, 7:02:20 AM"},
    { name: "John Doe", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456712", equity: "$34.5", registered: "9/18/24, 10:12:40 AM" },
    { name: "Alice Smith", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456713", equity: "$78.9", registered: "9/20/24, 2:23:18 PM" },
    { name: "Bob Johnson", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456714", equity: "$23.6", registered: "9/21/24, 9:45:50 AM"},
    { name: "Charlie Brown", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456715", equity: "$92.3", registered: "9/23/24, 11:34:12 AM" },
    { name: "Diana Lee", status: "Inactive", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456716", equity: "$67.8", registered: "9/25/24, 5:50:22 PM"},
    { name: "Evan Thomas", status: "Active", volumeScaling: "Multiply", offer: "Test Offer", tradingAccount: "11003456717", equity: "$48.1", registered: "9/26/24, 8:16:35 AM"}
  ];

  PositionsRows = [
    { position: "Buy", status: "Active", symbol: "AAPL", openTime: "9/16/24, 9:00 AM", volume: "10", profit: "$500", closeTime: "9/17/24, 4:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "GOOGL", openTime: "9/18/24, 10:00 AM", volume: "5", profit: "$350", closeTime: "9/18/24, 4:30 PM" },
    { position: "Buy", status: "Active", symbol: "TSLA", openTime: "9/20/24, 11:00 AM", volume: "8", profit: "$120", closeTime: "9/21/24, 5:00 PM" },
    { position: "Sell", status: "Inactive", symbol: "AMZN", openTime: "9/21/24, 12:00 PM", volume: "15", profit: "$700", closeTime: "9/21/24, 6:00 PM" },
    { position: "Buy", status: "Active", symbol: "MSFT", openTime: "9/23/24, 2:00 PM", volume: "12", profit: "$420", closeTime: "9/24/24, 3:30 PM" },
    { position: "Sell", status: "Inactive", symbol: "NFLX", openTime: "9/25/24, 4:00 PM", volume: "20", profit: "$600", closeTime: "9/26/24, 7:00 PM" }
  ];

}
