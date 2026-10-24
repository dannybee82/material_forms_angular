import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { payForBook } from 'src/app/form_fields/input_number_float/pay-for-book.formfield';
import { floatCallback } from 'src/app/form_fields/input_number_float/float-callback.formfield';
import { randomPositiveNumber } from 'src/app/form_fields/input_number_int/random-positive-number.formfield';
import { randomNegativeNumber } from 'src/app/form_fields/input_number_int/random-negative-number.formfield';

@Component({
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-numbers-demo',
  templateUrl: './numbers-demo.component.html',
  styleUrl: './numbers-demo.component.scss'
})
export class NumbersDemoComponent extends SharedFunctions {

  protected numbersDemoCallback: Subject<boolean> = new Subject<boolean>();
  protected readonly numbersDemo: GenericFormInterface = {
    id: 3,
    formType: FormTypeEnum.REGULAR,
    title: 'Numbers Demo - Inputs for ints and floats',
    cssClasses: 'demo-container-class',
    showSubmitButton: true,
    showResetButton: true,
    formFields: [
      payForBook,
      floatCallback,
      randomPositiveNumber,
      randomNegativeNumber
    ]
  };
  
}