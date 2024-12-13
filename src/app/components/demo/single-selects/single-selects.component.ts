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
  selector: 'app-single-selects',
  templateUrl: './single-selects.component.html',
  styleUrl: './single-selects.component.scss'
})
export class SingleSelectsComponent extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('select_girl_name',
                      'Select girl name',
                      'Select girl name:',
                      FORM_CONTROL_TYPES.INPUT_SELECT,
                      'select-girl-name-class predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
                      new AdditionalFormDataModel('select_girl_name', ['Jane', 'Matilda', 'Saskia', 'Victoria'], {"value": "Saskia"}),
                      [ FORM_VALIDATORS.REQUIRED ],
                      [ null ] ),
    new FormDataModel('select_color',
                      'Select Color',
                      'Select Color:',
                      FORM_CONTROL_TYPES.INPUT_SELECT_CALLBACK,
                      'select-color-class predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
                      new AdditionalFormDataModel('select_color', ['Black', 'Blue', 'Green', 'Red', 'Yellow', 'White'], {"value": "White"}),
                      [ FORM_VALIDATORS.REQUIRED ],
                      [ null ] )
  ];

}