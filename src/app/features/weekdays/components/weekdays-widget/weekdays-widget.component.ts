import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { WeekdayComponent } from '../weekday/weekday.component';
import { IDay } from '../../models/day.model';

@Component({
  selector: 'weekdays-widget',
  standalone: true,
  imports: [NgForOf, WeekdayComponent],
  templateUrl: './weekdays-widget.component.html',
  styleUrls: ['./weekdays-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekdaysWidgetComponent {
  public currentDay: number = new Date().getDay() - 1;
  public readonly weekdays: IDay[] = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sut',
    'Sun',
  ].map((title, i) => ({ title, isCurrent: i === this.currentDay }));
}
