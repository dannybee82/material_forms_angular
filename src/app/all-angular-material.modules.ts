import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material Components
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'

//Other.
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,    
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'nl-NL' },    
  ],
  exports: [
    MatAutocompleteModule,    
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatRippleModule
  ]  
})
export class AllAngularMaterialModules { }
