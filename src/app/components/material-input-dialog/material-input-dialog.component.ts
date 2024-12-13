import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-material-input-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatDialogActions,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './material-input-dialog.component.html',
  styleUrl: './material-input-dialog.component.scss'
})
export class MaterialInputDialogComponent implements OnInit {

  form: UntypedFormGroup = new FormGroup({});

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<MaterialInputDialogComponent>);

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [''],
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getData(): void {
    this.dialogRef.close(this.form.get('input')?.value);
  }

}