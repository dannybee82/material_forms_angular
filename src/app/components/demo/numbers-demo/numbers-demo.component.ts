import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { FormDataModel } from 'src/app/models/FormDataModel';
import { FORM_CONTROL_TYPES } from '../../form-controls/SetFormControls';
import { FORM_VALIDATORS } from '../../form-controls/SetFormControls';
import { AdditionalFormDataModel } from 'src/app/models/AdditionalFormDataModel';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';

@Component({
	standalone: true,
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-numbers-demo',
  templateUrl: './numbers-demo.component.html',
  styleUrl: './numbers-demo.component.scss'
})
export class NumbersDemoComponent extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('pay_for_book', 
                      'Pay for second hand book:', 
                      'Minumum (10.00) and Maximum (100.00) to pay for second hand book:', 
                      FORM_CONTROL_TYPES.INPUT_NUMBER_FLOAT, 
                      'pay-for-second-hand-book-class predefined-flex formfield-width float-left clear-left margin-bottom-15 margin-left-10 rounded-borders', 
                      new AdditionalFormDataModel('pay_for_book', null, {"step": ".01", "value": 10.05}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MINIMUM_VALUE_FLOAT, FORM_VALIDATORS.MAXIMUM_VALUE_FLOAT ], 
                      [ null, 10.00, 100.00 ] ),
    new FormDataModel('float_callback_test', 
                      'Enter value between -25.00 and 25.00:', 
                      'Enter value between -25.00 and 25.00', 
                      FORM_CONTROL_TYPES.INPUT_NUMBER_FLOAT_CALLBACK, 
                      'enter-value-between-class predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders', 
                      new AdditionalFormDataModel('float_callback_test', null, {"step": ".01", "value": 17.35}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MINIMUM_VALUE_FLOAT, FORM_VALIDATORS.MAXIMUM_VALUE_FLOAT ], 
                      [ null, -25.00, 25.00 ] ),
    new FormDataModel('random_positive_number', 
                      'Random Posivite Number:', 
                      'Random Positive Number (10-75):', 
                      FORM_CONTROL_TYPES.INPUT_NUMBER_INT, 
                      'random-positive-number-class predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders clear-left', 
                      new AdditionalFormDataModel('random_positive_number', null, {"step": "1", "min": 10, "max": 75, "value": 25}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MINIMUM_VALUE_INT, FORM_VALIDATORS.MAXIMUM_VALUE_INT ], 
                      [ null, 10, 75 ] ),
   new FormDataModel('random_negative_number', 
                      'Random Negative Number:', 
                      'Random Negative Number (from -10 to -75):', 
                      FORM_CONTROL_TYPES.INPUT_NUMBER_INT_CALLBACK, 
                      'random-negative-number-class predefined-flex formfield-width float-left clear-right margin-bottom-15 margin-left-10 rounded-borders', 
                      new AdditionalFormDataModel('random_negative_number', null, {"step": "1", "min": -75, "max": -10, "value": -25}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MINIMUM_VALUE_INT, FORM_VALIDATORS.MAXIMUM_VALUE_INT ], 
                      [ null, -75, -10 ] )
  ];

}