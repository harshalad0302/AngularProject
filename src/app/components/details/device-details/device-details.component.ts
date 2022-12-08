import { Component,OnInit } from '@angular/core';
import deviceData from '../../../data.json'
import { Device } from 'src/app/models/device.model';


@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.css']
})
export class DeviceDetailsComponent implements OnInit {

   device: Device[]= deviceData;

  constructor(){

  }
  ngOnInit(): void {
     
  }

 

}
