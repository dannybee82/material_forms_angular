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
  selector: 'app-textarea-demo',
  templateUrl: './textarea-demo.component.html',
  styleUrl: './textarea-demo.component.scss'
})
export class TextareaDemoComponent  extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('textarea_about_normal',
                      'About (Max: 125 characters)',
                      'About (Max: 125 characters):',
                      FORM_CONTROL_TYPES.INPUT_TEXTAREA,
                      'textarea-about predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
                      new AdditionalFormDataModel('textarea_about_normal', ['Some Text'], {rows: 5, columns: 150}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MIN_LENGTH, FORM_VALIDATORS.MAX_LENGTH ],
                      [ null, 1, 125 ] ), 
    new FormDataModel('textarea_about_callback',
                      'About Callback (Max: 250 characters)',
                      'About Callback (Max: 250 characters):',
                      FORM_CONTROL_TYPES.INPUT_TEXTAREA_CALLBACK,
                      'textarea-about-callback predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
                      new AdditionalFormDataModel('textarea_about_callback', null, {rows: 8}),
                      [ FORM_VALIDATORS.REQUIRED, FORM_VALIDATORS.MIN_LENGTH, FORM_VALIDATORS.MAX_LENGTH ],
                      [ null, 1, 250 ] )
  ];

}