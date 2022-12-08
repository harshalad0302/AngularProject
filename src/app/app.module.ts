import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceDetailsComponent } from './components/details/device-details/device-details.component';
import { UptimeReportingComponent } from './components/details/uptime-reporting/uptime-reporting.component';


@NgModule({
  declarations: [
    AppComponent,
    DeviceDetailsComponent,
    UptimeReportingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
