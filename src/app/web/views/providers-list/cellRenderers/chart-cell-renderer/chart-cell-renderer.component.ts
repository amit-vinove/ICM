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
          name: 'Dataset 1', // First dataset
          data: [10, 13, 18, 23, 29, 32, 35, 40, 45]
        },
        {
          name: 'Dataset 2', // Second dataset
          data: [20, 22, 27, 30, 35, 39, 45, 51, 57]
        },
        {
          name: 'Dataset 3', // Third dataset
          data: [30, 34, 37, 40, 42, 46, 49, 54, 65]
        },
      ],
      chart: {
        height: 100,
        width: 200,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false // Hide the legend
      },
      stroke: {
        show: true,
        curve: "straight",
        width: [3, 3, 3],
      },
      colors: ['#0D4878', '#146BB2', '#07253E',], 
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
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'] // Sample month labels
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
      grid: {
        show: false, // Hide background grid lines
        padding: {
          top: -80,
          left: 0,
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
