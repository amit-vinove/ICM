import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill
} from "ng-apexcharts"

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
  selector: 'app-chart-cell-renderer',
  templateUrl: './chart-cell-renderer.component.html',
  styleUrl: './chart-cell-renderer.component.scss'
})


export class ChartCellRendererComponent {

  @ViewChild("cellChart") cellChart !: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

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
        height: 100,
        width: 100,
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
          top: -60,
          left: -20,
          bottom: 0,
          right: 0,
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

  params: any;

  // This method is required for ag-Grid to pass parameters to the component
  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true
  }

}
