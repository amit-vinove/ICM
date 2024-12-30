import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill
} from "ng-apexcharts";
import { ColDef } from 'ag-grid-community';
import { TypeIconComponent } from './cellRenderers/type-icon/type-icon.component';
import { StrategyCellRendererComponent } from './cellRenderers/strategy-cell-renderer/strategy-cell-renderer.component';
import { RiskCellRendererComponent } from './cellRenderers/risk-cell-renderer/risk-cell-renderer.component';
import { ChartCellRendererComponent } from './cellRenderers/chart-cell-renderer/chart-cell-renderer.component';
import { ButtonCellRendererComponent } from './cellRenderers/button-cell-renderer/button-cell-renderer.component';
import { TranslateService } from '@ngx-translate/core';

export interface User {
  name: string;
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  colors: any
  fill: ApexFill
  labels: any
};

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.scss'
})
export class ProvidersListComponent {
// viewmode = cards | table 
  public viewMode: any = 'cards'

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions!: Observable<User[]>;

  cards = Array(10).fill(0);

  tabLabels:any = [];
  colDefs: ColDef[] = []
  constructor(public translate: TranslateService
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'Counts',
          data: [15, 23, 18, 32] // Sample counts for each category
        }
      ],
      chart: {
        height: 140,
        width: 300,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 3,
      },
      colors: ['#12B76A'],
      xaxis: {
        labels: {
          show: false, // Hide x-axis labels
        },
        axisTicks: {
          show: false // Hide x-axis ticks
        },
        axisBorder: {
          show: false // Hide x-axis border line
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr'] // Sample month labels
      },
      yaxis: {
        labels: {
          show: false, // Hide y-axis labels
          // offsetY: 190 
        },
        axisBorder: {
          show: false // Hide y-axis border line
        },
        axisTicks: {
          show: false // Hide y-axis ticks
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#ECFDF3'],
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 0.35,
          stops: [0, 100]
        }
      },
      grid: {
        show: false, // Hide background grid lines
        padding: {
          top: -70, // Reduce top padding of grid to bring the chart area up
          left: -10,
          bottom: -20,
          right: -10,
        }
      },
      tooltip: {
        enabled: false // Disables the tooltip on hover
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            stroke: {
              width: 2
            },
            grid: {
              padding: {
                top: -50,
                bottom: -10
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 130
            },
            grid: {
              padding: {
                top: -60,
                bottom: -15
              }
            }
          }
        }
      ]
    };
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
    this.translate.onLangChange.subscribe(() => {
      this.initializeColDefs();
      this.initializeTabLabels()
    });
    this.initializeColDefs(); 
    this.initializeTabLabels()
  }

  initializeColDefs() {
    this.colDefs = [
      { field: "strategy", headerName: this.translate.instant('PROVIDERS_LIST.Title'), resizable: false, width:250,suppressSizeToFit: true ,cellRenderer: StrategyCellRendererComponent},
      { field: "type", headerName: this.translate.instant('PROVIDERS_LIST.Type'), resizable: false,cellRenderer:TypeIconComponent,width:100 },
      { field: "investors", headerName: this.translate.instant('PROVIDERS_LIST.Investors'), resizable: false ,width:150},
      { field: "invested", headerName: this.translate.instant('PROVIDERS_LIST.Invested'), resizable: false,width:150 },
      { field: "ownFunds", headerName: this.translate.instant('PROVIDERS_LIST.Own Funds'), resizable: false,width:150},
      { field: "drawdown", headerName: this.translate.instant('PROVIDERS_LIST.Drawdown'), resizable: false,width:150 },
      { field: "fee", headerName: this.translate.instant('PROVIDERS_LIST.Fee'), resizable: false,width:150 },
      { field: "risk", headerName: this.translate.instant('PROVIDERS_LIST.Risk'), resizable: false ,cellRenderer:RiskCellRendererComponent,width:150},
      { field: "chart", headerName: this.translate.instant('PROVIDERS_LIST.Chart'), resizable: false,cellRenderer:ChartCellRendererComponent ,width:200,headerClass:'chartHeader'},
      { field: "action", headerName: '', resizable: false,cellRenderer:ButtonCellRendererComponent,width:150,cellStyle: {'padding-left':'40px'}, },
    ];
  }
  initializeTabLabels() {
    this.tabLabels = [
      { name: 'featured', label: this.translate.instant('PROVIDERS_LIST.Featured') },
      { name: 'bestPerformers', label: this.translate.instant('PROVIDERS_LIST.Best Performers') },
      { name: 'cryptoKings', label: this.translate.instant('PROVIDERS_LIST.Crypto Kings') },
      { name: 'highWinRatio', label: this.translate.instant('PROVIDERS_LIST.High Win Ratio') },
      { name: 'highOwnFunds', label: this.translate.instant('PROVIDERS_LIST.High Own Funds') },
      { name: 'lowRisk', label: this.translate.instant('PROVIDERS_LIST.Low Risk') },
      { name: 'lowDrawdown', label: this.translate.instant('PROVIDERS_LIST.Low Drawdown') },
      { name: 'lowFees', label: this.translate.instant('PROVIDERS_LIST.Low Fees') },
      { name: 'mostPopular', label: this.translate.instant('PROVIDERS_LIST.Most Popular') },
      { name: 'mostInvested', label: this.translate.instant('PROVIDERS_LIST.Most Invested') },
      { name: 'watchlist', label: this.translate.instant('PROVIDERS_LIST.Watchlist') },
      { name: 'all', label: this.translate.instant('PROVIDERS_LIST.All') },
    ];
  }
  

  rowData = [
    {
      id: 1,
      strategy: "Catalog",
      investors: 1,
      invested: "$500",
      ownFunds: "$2200",
      drawdown: "54.5%",
      fee: "50%",
      risk: "High",
      chart: "Bar",
      strategyIcon:'../../../../assets/icons/providerIcon.jpeg'
    },
    {
      id: 2,
      strategy: "Growth Fund",
      investors: 25,
      invested: "$10,000",
      ownFunds: "$5,000",
      drawdown: "12.3%",
      fee: "1.2%",
      risk: "Medium",
      chart: "Line",
      strategyIcon:'../../../../assets/icons/providerIcon1.png'

    },
    {
      id: 3,
      strategy: "Value Fund",
      investors: 12,
      invested: "$2,500",
      ownFunds: "$1,000",
      drawdown: "8.7%",
      fee: "0.8%",
      risk: "Low",
      chart: "Bar",
      strategyIcon:'../../../../assets/icons/providerIcon2.png'

    },
    {
      id: 4,
      strategy: "High Risk Hedge",
      investors: 50,
      invested: "$50,000",
      ownFunds: "$15,000",
      drawdown: "70.0%",
      fee: "20%",
      risk: "High",
      chart: "Pie",
      strategyIcon:'../../../../assets/icons/providerIcon3.png'

    },
    {
      id: 5,
      strategy: "Quotient",
      investors: 100,
      invested: "$75,000",
      ownFunds: "$50,000",
      drawdown: "5.4%",
      fee: "0.5%",
      risk: "Low",
      chart: "Area",
      strategyIcon:'../../../../assets/icons/providerIcon4.png'
    },
    {
      id: 6,
      strategy: "Layers",
      investors: 100,
      invested: "$75,000",
      ownFunds: "$50,000",
      drawdown: "5.4%",
      fee: "0.5%",
      risk: "Low",
      chart: "Area",
      strategyIcon:'../../../../assets/icons/providerIcon5.png'
    },
    {
      id: 7,
      strategy: "Stable Growth",
      investors: 100,
      invested: "$75,000",
      ownFunds: "$50,000",
      drawdown: "5.4%",
      fee: "0.5%",
      risk: "Low",
      chart: "Area",
      strategyIcon:'../../../../assets/icons/providerIcon6.png'
    },
  ];

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  switchMode(type: any) {
    this.viewMode = type
  }

}
