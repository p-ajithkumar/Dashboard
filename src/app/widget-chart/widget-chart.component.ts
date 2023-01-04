import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-chart',
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.css']
})
export class WidgetChartComponent {

  Highcharts=Highcharts
  chartOptions={}

  constructor()
  {
    this.chartOptions=
    {
      chart: {
          type: 'spline'
      },
      title: {
          text: 'Monthly Average Placements'
      },
      subtitle: {
          text: 'Luminar Technolab'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          accessibility: {
              description: 'Months of the year'
          }
      },
      yAxis: {
          title: {
              text: 'Placements'
          },

      },
      tooltip: {
          crosshairs: true,
          shared: true
      },
      plotOptions: {
          spline: {
              marker: {
                  radius: 4,
                  lineColor: '#666666',
                  lineWidth: 1
              }
          }
      },
      credits:
      {
enabled:false //hiding highcharts.com
      },
      series: [{
          name: 'MEARN',
          marker: {
              symbol: 'square'
          },
          data: [5, 8, 9, 13, 18, 21, 25, 28, 32, 36, 37]
  
      }, {
          name: ' PYTHON',
          marker: {
              symbol: 'diamond'
          },
          data: [ 1, 3, 5, 10, 13, 14, 14, 15, 17, 17, 26]
      }]
  }
  HC_exporting(Highcharts);
  }

}
