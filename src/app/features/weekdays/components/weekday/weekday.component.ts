import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDay } from '../../models/day.model';

@Component({
  selector: 'weekday',
  standalone: true,
  templateUrl: './weekday.component.html',
  styleUrls: ['./weekday.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeekdayComponent {
  @Input() day!: IDay;
}
