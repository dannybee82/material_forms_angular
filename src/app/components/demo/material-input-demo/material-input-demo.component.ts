import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AllAngularMaterialModules } from 'src/app/all-angular-material.modules';
import { MaterialInputDialogComponent } from '../../material-input-dialog/material-input-dialog.component';
import { of, switchMap } from 'rxjs';
import { BackToMainComponent } from '../../back-to-main/back-to-main.component';

@Component({
  selector: 'app-material-input-demo',
  imports: [
    AllAngularMaterialModules,
    BackToMainComponent
  ],
  templateUrl: './material-input-demo.component.html',
  styleUrl: './material-input-demo.component.scss'
})
export class MaterialInputDemoComponent {

  returnedDataFromInputDialog: WritableSignal<string> = signal('');

  public dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(MaterialInputDialogComponent).afterClosed().pipe(
      switchMap((data: string) => {
        return data ? of(data) : of('');
      })
    ).subscribe((data: string) => {
      this.returnedDataFromInputDialog.set(data);
    });
  }

}