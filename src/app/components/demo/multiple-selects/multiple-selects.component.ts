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
  selector: 'app-multiple-selects',
  templateUrl: './multiple-selects.component.html',
  styleUrl: './multiple-selects.component.scss'
})
export class MultipleSelectsComponent extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('select_girl_name_multi',
                      'Select girl name (Multi)',
                      'Select girl name (Multi):',
                      FORM_CONTROL_TYPES.INPUT_SELECT_MULTI,
                      'select-girl-name-multi-class predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
                      new AdditionalFormDataModel('select_girl_name_multi', ['Jane', 'Matilda', 'Saskia'], {"value": ["Saskia", "Matilda"]}),
                      [ FORM_VALIDATORS.REQUIRED ],
                      [ null ] ),
    new FormDataModel('select_color_multi',
                      'Select Color (Multi)',
                      'Select Color (Multi):',
                      FORM_CONTROL_TYPES.INPUT_SELECT_MULTI_CALLBACK,
                      'select-color-multi-class predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
                      new AdditionalFormDataModel('select_color_multi', ['Black', 'Blue', 'Green', 'Red', 'Yellow', 'White'], {"value": ["Blue", "Red","White"]}),
                      [ FORM_VALIDATORS.REQUIRED ],
                      [ null ] )
  ];

}