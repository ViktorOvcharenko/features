import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class DialogService {
  private matDialog = inject(MatDialog);
  private static instance: DialogService | null = null;

  constructor() {
    DialogService.instance = this;
  }

  public static get getInstance(): DialogService | null {
    return DialogService.instance;
  }

  public openDialog<T>(
    data: any,
    component: ComponentType<T>
  ): Observable<boolean> {
    return this.matDialog
      .open(component, { data: data, disableClose: true })
      .afterClosed();
  }
}
