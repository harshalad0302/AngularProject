import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailsComponent } from './components/details/device-details/device-details.component';
import { UptimeReportingComponent } from './components/details/uptime-reporting/uptime-reporting.component';

const routes: Routes = [{
  path:'',
  component: UptimeReportingComponent,
},
{
  path:'uptimeReporting',
  component: UptimeReportingComponent,
},
{
  path:'deviceDetails',
  component: DeviceDetailsComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
