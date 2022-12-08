import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptimeReportingComponent } from './uptime-reporting.component';

describe('UptimeReportingComponent', () => {
  let component: UptimeReportingComponent;
  let fixture: ComponentFixture<UptimeReportingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptimeReportingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptimeReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
