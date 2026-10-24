import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { favoriteFruit } from 'src/app/form_fields/input_auto_complete/favorite-fruit.formfield';
import { favoriteCar } from 'src/app/form_fields/input_auto_complete/favorite-car.formfield';

@Component({
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-autocomplete-inputs',
  templateUrl: './autocomplete-inputs.component.html',
  styleUrls: ['./autocomplete-inputs.component.scss']
})
export class AutocompleteInputsComponent extends SharedFunctions {

  protected autocompleteInputsDemoCallback: Subject<boolean> = new Subject<boolean>();
  protected readonly autocompleteInputsDemo: GenericFormInterface = {
    id: 2,
    formType: FormTypeEnum.REGULAR,
    title: 'Demo with Autocomplete Input Fields',
    cssClasses: 'demo-container-class',
    showSubmitButton: true,
    showResetButton: true,
    formFields: [
      favoriteFruit,
      favoriteCar
    ]
  };

}