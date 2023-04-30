import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDecoratorUser } from '../../models/confirm-decorator-user.model';
import { confirmDecoratorUsersMock } from '../../mocks/confirm-decorator-users.mock';
import { confirmation } from '../../decorators/confirm-dialog.decorator';

@Component({
  selector: 'user-table',
  standalone: true,
  imports: [MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserTableComponent {
  public readonly displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'age',
    'delete',
  ];
  public dataSource = confirmDecoratorUsersMock;
  private cdr = inject(ChangeDetectorRef);

  @confirmation()
  public deleteUser(event: ConfirmDecoratorUser): void {
    this.dataSource = this.dataSource.filter((user) => user.id !== event.id);
    this.cdr.detectChanges();
  }

  public reloadData(): void {
    this.dataSource = confirmDecoratorUsersMock;
    this.cdr.detectChanges();
  }
}
