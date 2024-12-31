import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";
import { Observable } from 'rxjs';
import { SymbolCellRendererComponent } from '../cellRenderers/symbol-cell-renderer/symbol-cell-renderer.component';
import { ProviderListProfileTypeCellRendererComponent } from '../cellRenderers/provider-list-profile-type-cell-renderer/provider-list-profile-type-cell-renderer.component';
import { TranslateService } from '@ngx-translate/core';

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
  plotOptions: ApexPlotOptions
  legen: ApexLegend
};
export interface User {
  name: string;
}

@Component({
  selector: 'app-provider-list-profile',
  templateUrl: './provider-list-profile.component.html',
  styleUrl: './provider-list-profile.component.scss'
})
export class ProviderListProfileComponent {

  @ViewChild("chart") chart !: ChartComponent;
  public barChartOptions!: Partial<ChartOptions> | any;
  public stackedChartOptions!: Partial<ChartOptions> | any;
  public areaChartOptions !: Partial<ChartOptions> | any;
  public pieChartOptions !: Partial<ChartOptions> | any;
  public riskStackedChartOptions !: Partial<ChartOptions> | any;
  public portfolioChartOptions1 !: Partial<ChartOptions> | any;
  public portfolioChartOptions2 !: Partial<ChartOptions> | any;
  public portfolioChartOptions3 !: Partial<ChartOptions> | any;


  public performanceToggle = 'performance'
  myControl = new FormControl<string | User>('');
  options: User[] = [{ name: 'Mary' }, { name: 'Shelley' }, { name: 'Igor' }];
  filteredOptions!: Observable<User[]>;

  colDefs: ColDef[] = []


  constructor(public translate: TranslateService
  ) {
    this.barChartOptions = {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '30px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: '',
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Apples', 'Oranges', 'Bananas'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
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
    this.stackedChartOptions = {
      series: [
        {
          name: 'Series 1',
          data: [44, 55, 41, 67, 22, 43, 56, 78, 34, 23, 45, 67] // Data for 12 months
        },
        {
          name: 'Series 2',
          data: [13, 23, 20, 8, 13, 27, 29, 41, 34, 22, 31, 14] // Data for 12 months
        },
        {
          name: 'Series 3',
          data: [11, 17, 15, 15, 21, 14, 19, 25, 18, 12, 20, 16] // Data for 12 months
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10, // Border radius applied to the top of each stack
          borderRadiusApplication: 'end', // Apply to the topmost part of the stack
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ] // Display months on the X-axis
      },
      yaxis: {
        show: false // Disable Y-axis
      },
      legend: {
        position: 'top',
        offsetY: 2,
        horizontalAlign: 'right', // Align the legend to the right
        floating: true, // Make the legend float (position absolute)
        offsetX: 10, // Adjust horizontal position for fine-tuning
      },
      fill: {
        opacity: 1
      },
      colors: ['#0A365B', '#105995', '#A8D1F3'], // Custom stack colors
      tooltip: {
        enabled: false // Disable tooltips on hover
      },
      dataLabels: {
        enabled: false // Disable data labels
      }
    };
    this.areaChartOptions = {
      series: [{
        name: "STOCK ABC",
        data: [80, 76, 73, 80, 78, 80, 87, 88, 90, 93, 95, 97]
      }],
      chart: {
        type: 'area',
        height: 450,
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        curve: 'smooth',
        width: [2], // Reduced stroke width
      },
      colors: ['#146BB2'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0, // Minimal overall shading
          gradientToColors: ['#146BB2'], // The darker color at the top
          inverseColors: false,
          opacityFrom: 0.5, // Higher opacity at the top
          opacityTo: 0.1, // Lower opacity at the bottom
          stops: [0, 100] // Focus on top being darker, then gradual lightening
        }
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ],
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month', // Add a label below the x-axis
          style: {
            fontSize: '14px',
            fontWeight: 'light',
            color: '#333' // Adjust text color as needed
          }
        }
      },
      yaxis: {
        opposite: false,
      },
      legend: {
        position: 'top',
        offsetY: 0,
        horizontalAlign: 'right', // Align the legend to the right
        floating: true, // Make the legend float (position absolute)
        offsetX: 0, // Adjust horizontal position for fine-tuning
      },
    };
    this.pieChartOptions = {
      series: [42],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
          },
          dataLabels: {
            value: {
              fontSize: '25px',
              fontWeight: 600
            },
            total: {
              show: true,
              label: 'Trades Total',
              fontWeight: 400,
              formatter: function (w: any) {
                return 121;
              },
            }
          }
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Apples'],
      colors: ['#0A365B'],
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
    this.riskStackedChartOptions = {
      series: [
        {
          name: '2019',
          data: [44, 55, 41, 67, 22, 43, 56, 78, 34, 23, 45, 67] // Data for 12 months
        },
        {
          name: '2020',
          data: [13, 23, 20, 8, 13, 27, 29, 41, 34, 22, 31, 14] // Data for 12 months
        },
        {
          name: '2021',
          data: [11, 17, 15, 15, 21, 14, 19, 25, 18, 12, 20, 16] // Data for 12 months
        }
      ],
      chart: {
        type: 'bar',
        height: 280,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10, // Border radius applied to the top of each stack
          borderRadiusApplication: 'end', // Apply to the topmost part of the stack
        }
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        title: {
          text: 'Month', // Add a label below the x-axis
          style: {
            fontSize: '14px',
            fontWeight: 'light',
            color: '#333' // Adjust text color as needed
          }
        }
      },
      yaxis: {
        show: true
      },
      legend: {
        position: 'top',
        offsetY: 2,
        horizontalAlign: 'right', // Align the legend to the right
        floating: true, // Make the legend float (position absolute)
        offsetX: 10, // Adjust horizontal position for fine-tuning
      },
      fill: {
        opacity: 1
      },
      colors: ['#0A365B', '#105995', '#A8D1F3'], // Custom stack colors
      tooltip: {
        enabled: false // Disable tooltips on hover
      },
      dataLabels: {
        enabled: false // Disable data labels
      }
    };
    this.portfolioChartOptions1 = {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Traded',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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
    this.portfolioChartOptions2 = {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Winner',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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
    this.portfolioChartOptions3 = {
      series: [84, 80, 67],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '45%', // Adjust this percentage to reduce the inner spacing
          },
          track: {
            show: true,
            background: "#F2F4F7",
            strokeWidth: '100%',
            margin: 5, // Space between bars
          },
          dataLabels: {
            name: {
              fontSize: '25px',
            },
            value: {
              fontSize: '25px',
              fontWeight: 500
            },
            total: {
              show: true,
              label: 'Top Traded',
              fontWeight: 400,
              formatter: function (w: any) {
                return 316;
              },
            }
          },
        },
      },
      stroke: {
        lineCap: 'round', // This enables rounded edges for the bars
      },
      labels: ['Gold', 'GER40Cash', 'US100Cash'],
      colors: ['#0A365B', '#146BB2', '#00D2FF'],
      legend: {
        show: true,
        position: 'bottom', // Position at the bottom
        horizontalAlign: 'center', // Center align the legend
        offsetY: -30
      },
      responsive: [
        {
          breakpoint: 600,
          options: {
            chart: {
              height: 120
            },
            legend: {
              fontSize: '12px', // Adjust legend font size for smaller screens
              position: 'bottom',
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

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => {
      this.initializeColDefs();
    });
    this.initializeColDefs(); 
  }

  rowData = [
    {
      id: 1,
      symbol: "Catalog",
      type: 'Buy',
      assetType: "Equity",
      contractSize: "100 units",
      volume: 500,
      openPrice: "$1500",
      openTime: "2023-12-01 10:00",
      profit: "$200",
      symbolIcon: '../../../../assets/icons/providerIcon.jpeg'
    },
    {
      id: 2,
      symbol: "Growth Fund",
      type: 'Buy',
      assetType: "Mutual Fund",
      contractSize: "50 shares",
      volume: 1000,
      openPrice: "$2500",
      openTime: "2023-12-02 11:00",
      profit: "$300",
      symbolIcon: '../../../../assets/icons/providerIcon1.png'
    },
    {
      id: 3,
      symbol: "Value Fund",
      type: 'Sell',
      assetType: "ETF",
      contractSize: "200 units",
      volume: 2500,
      openPrice: "$1200",
      openTime: "2023-12-03 12:00",
      profit: "$150",
      symbolIcon: '../../../../assets/icons/providerIcon2.png'
    },
    {
      id: 4,
      symbol: "High Risk Hedge",
      type: 'Sell',
      assetType: "Hedge Fund",
      contractSize: "10 shares",
      volume: 50000,
      openPrice: "$3000",
      openTime: "2023-12-04 13:00",
      profit: "$1000",
      symbolIcon: '../../../../assets/icons/providerIcon3.png'
    },
    {
      id: 5,
      symbol: "Quotient",
      type: 'Buy',
      assetType: "Bond",
      contractSize: "500 units",
      volume: 75000,
      openPrice: "$1000",
      openTime: "2023-12-05 14:00",
      profit: "$500",
      symbolIcon: '../../../../assets/icons/providerIcon4.png'
    },
    {
      id: 6,
      symbol: "Layers",
      type: 'Buy',
      assetType: "Commodity",
      contractSize: "100 barrels",
      volume: 75000,
      openPrice: "$1100",
      openTime: "2023-12-06 15:00",
      profit: "$600",
      symbolIcon: '../../../../assets/icons/providerIcon5.png'
    },
    {
      id: 7,
      symbol: "Stable Growth",
      type: 'Sell',
      assetType: "Index",
      contractSize: "2000 points",
      volume: 75000,
      openPrice: "$1200",
      openTime: "2023-12-07 16:00",
      profit: "$700",
      symbolIcon: '../../../../assets/icons/providerIcon6.png'
    },
  ];

  initializeColDefs() {
    this.colDefs=[
      { field: "symbol", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Symbol'), resizable: false, width: 250, suppressSizeToFit: true, cellRenderer: SymbolCellRendererComponent },
      { field: "type", headerName:this.translate.instant('PROVIDERS_LIST_PROFILE.Type'), resizable: false, cellRenderer: ProviderListProfileTypeCellRendererComponent, width: 100 },
      { field: "assetType", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Asset Type'), resizable: false, width: 150 },
      { field: "contractSize", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Contract Size'), resizable: false, width: 150 },
      { field: "volume", headerName:this.translate.instant('PROVIDERS_LIST_PROFILE.Volume'), resizable: false, width: 150 },
      { field: "openPrice", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Open Price'), resizable: false, width: 150 },
      { field: "openTime", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Open Time'), resizable: false, width: 200 },
      { field: "profit", headerName: this.translate.instant('PROVIDERS_LIST_PROFILE.Profit'), resizable: false, width: 150, cellStyle: { color: '#12B76A' } },
    ];
  }


  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }
  togglePerformance(type: any) {
    this.performanceToggle = type
  }

}
