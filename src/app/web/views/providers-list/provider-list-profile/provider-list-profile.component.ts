import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke, ApexFill,
  ApexPlotOptions
} from "ng-apexcharts";

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
  plotOptions:ApexPlotOptions
};

@Component({
  selector: 'app-provider-list-profile',
  templateUrl: './provider-list-profile.component.html',
  styleUrl: './provider-list-profile.component.scss'
})
export class ProviderListProfileComponent {

  @ViewChild("chart") chart !: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;

  constructor(
  ) {
    this.chartOptions = {
      series: [84,80, 67],
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
              fontWeight:600
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
    
    
    
  }

}
