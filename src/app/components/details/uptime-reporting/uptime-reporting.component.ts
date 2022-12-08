import { Component,OnInit } from '@angular/core';
import deviceData from '../../../data.json'
import { Device } from 'src/app/models/device.model';
import { Chart,registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-uptime-reporting',
  templateUrl: './uptime-reporting.component.html',
  styleUrls: ['./uptime-reporting.component.css']
})
export class UptimeReportingComponent implements OnInit {

  device: Device[]= deviceData;
  labledata:string[]=[];
  actualAverage:number[]=[];

  constructor(){

  }
  ngOnInit(): void {
      
      for(let i = 0 ; i < this.device.length ;i++){
        this.labledata.push(this.device[i].Room);
        this.actualAverage.push(this.device[i].Average);
      }
      this.RenderChart();

  }

  RenderChart(){
      const myChart = new Chart("bargraph", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: this.labledata, 
	       datasets: [
          {
            label: "Average Uptime",
            data: this.actualAverage,
            backgroundColor: 'green'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

}
