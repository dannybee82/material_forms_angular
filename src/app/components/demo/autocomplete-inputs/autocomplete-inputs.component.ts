import { Component } from '@angular/core';
import { FormDataModel } from 'src/app/models/FormDataModel';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { FORM_CONTROL_TYPES, FORM_VALIDATORS } from '../../form-controls/SetFormControls';
import { AdditionalFormDataModel } from 'src/app/models/AdditionalFormDataModel';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';

@Component({
	standalone: true,
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-autocomplete-inputs',
  templateUrl: './autocomplete-inputs.component.html',
  styleUrls: ['./autocomplete-inputs.component.scss']
})
export class AutocompleteInputsComponent extends SharedFunctions {

  public containerCssClass: string = "demo-container-class";

  public override formControls: FormDataModel[] = [
    new FormDataModel('favorite_fruit', 
                      'Favorite Fruit (autocomplete)', 
                      'Favorite Fruit:', 
                      FORM_CONTROL_TYPES.INPUT_TEXT_AUTOCOMPLETE, 
                      'favorite-fruit-class clear-left predefined-flex formfield-width float-left margin-bottom-15 margin-left-10', 
                      new AdditionalFormDataModel('favorite_fruit', ['ananas', 'apple', 'banana', 'black berry', 'peach', 'pear', 'strawberry']), 
                      [ FORM_VALIDATORS.REQUIRED ], 
                      [ null ] ),                  
    new FormDataModel('favorite_car', 
                      'Favorite Car (autocomplete)', 
                      'Favorite Car:', 
                      FORM_CONTROL_TYPES.INPUT_TEXT_AUTOCOMPLETE_CALLBACK, 
                      'favorite-car-class clear-right predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders',
                      new AdditionalFormDataModel('favorite_car', ['Alfa Romeo', 'Batmobile', 'Ferrari', 'Lada', 'Lamborghini', 'Mercedes', 'Porsche' ]),                        
                      [ FORM_VALIDATORS.REQUIRED ], 
                      [ null ] )
  ];

}