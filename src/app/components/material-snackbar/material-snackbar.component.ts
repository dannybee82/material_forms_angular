import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-material-snackbar',
  imports: [],
  templateUrl: './material-snackbar.component.html',
  styleUrl: './material-snackbar.component.scss'
})
export class MaterialSnackbarComponent {

  readonly data = inject(MAT_SNACK_BAR_DATA);
  public snackBar = inject(MatSnackBar);

  close(): void {
    this.snackBar.dismiss();
  }

}
