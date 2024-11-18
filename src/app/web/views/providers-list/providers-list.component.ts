import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill
} from "ng-apexcharts";

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

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions!: Observable<User[]>;

  cards = Array(10).fill(0);

  tabLabels = [
    { name: 'featured', label: 'Featured' },
    { name: 'bestPerformers', label: 'Best Performers' },
    { name: 'cryptoKings', label: 'Crypto Kings' },
    { name: 'highWinRatio', label: 'High Win Ratio' },
    { name: 'highOwnFunds', label: 'High Own Funds' },
    { name: 'lowRisk', label: 'Low Risk' },
    { name: 'lowDrawdown', label: 'Low Drawdown' },
    { name: 'lowFees', label: 'Low Fees' },
    { name: 'mostPopular', label: 'Most Popular' },
    { name: 'mostInvested', label: 'Most Invested' },
    { name: 'watchlist', label: 'Watchlist' },
    { name: 'all', label: 'All' },
  ];



  constructor(
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
        width:3,
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
          left:-10,
          bottom:-20,
          right:-10,
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
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
