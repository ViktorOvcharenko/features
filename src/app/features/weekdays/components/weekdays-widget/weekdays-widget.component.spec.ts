import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekdaysWidgetComponent } from './weekdays-widget.component';

describe('WeekdaysComponent', () => {
  let component: WeekdaysWidgetComponent;
  let fixture: ComponentFixture<WeekdaysWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekdaysWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WeekdaysWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
