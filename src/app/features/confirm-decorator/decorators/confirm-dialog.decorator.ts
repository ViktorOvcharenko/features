import { DialogService } from 'src/app/shared/services/dialog.service';
import { ConfirmDialogData } from '../models/confirm-dialog-data.model';
import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';

const defaultConfirmData = {
  title: 'Confirmation',
  message: 'Are you sure you want to perform this action?',
};

export function confirmation(
  confirmData: ConfirmDialogData = defaultConfirmData
) {
  return function (
    target: Object,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any): Promise<void> {
      DialogService.getInstance
        ?.openDialog(confirmData, ConfirmDialogComponent)
        .subscribe((validation) => {
          if (validation) originalMethod.apply(this, args);
        });
    };

    return descriptor;
  };
}
