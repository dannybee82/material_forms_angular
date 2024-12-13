import { Component } from '@angular/core';
import { FormDataModel } from 'src/app/models/FormDataModel';
import { FORM_CONTROL_TYPES } from '../../form-controls/SetFormControls';
import { FORM_VALIDATORS } from '../../form-controls/SetFormControls';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { AdditionalFormDataModel } from 'src/app/models/AdditionalFormDataModel';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';

@Component({
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('firstname', 
                      'Firstname', 
                      'Firstname:', 
                      FORM_CONTROL_TYPES.INPUT_TEXT, 
                      'firstname-class clear-left predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders', 
                      null, 
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.PATTERN ], 
                      [ null, /^[a-zA-Z\W ]+$/ ] ),
    new FormDataModel('lastname', 
                      'Lastname (Callback)', 
                      'Lastname: (Callback)', 
                      FORM_CONTROL_TYPES.INPUT_TEXT_CALLBACK, 
                      'lastname-class clear-right predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders', 
                      null, 
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.PATTERN ], 
                      [ null, /^[a-zA-Z\W ]+$/ ] ),
    new FormDataModel('birth_date_callback',
                      'Birth Date (Callback):',
                      'Birth Date (Callback) (DD/MM/YYY):',
                      FORM_CONTROL_TYPES.INPUT_DATE_CALLBACK,
                      'birth-date-callback-class-002 predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
                      new AdditionalFormDataModel('birth_date_callback', null, {"conditionalRegex": new RegExp(/\d{1,2}\/\d{1,2}\/\d{4}|\d{1,2}-\d{1,2}-\d{4}/g) }),
                      [ FORM_VALIDATORS.REQUIRED ],
                      [ null ] )
  ];

}