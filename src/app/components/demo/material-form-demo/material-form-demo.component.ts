import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';

// The various forms.
import { firstname } from 'src/app/form_fields/input_text/first-name.formfield';
import { lastname } from 'src/app/form_fields/input_text/last-name.formfield';
import { favoriteFruit } from 'src/app/form_fields/input_auto_complete/favorite-fruit.formfield';
import { favoriteCar } from 'src/app/form_fields/input_auto_complete/favorite-car.formfield';
import { payForBook } from 'src/app/form_fields/input_number_float/pay-for-book.formfield';
import { floatCallback } from 'src/app/form_fields/input_number_float/float-callback.formfield';
import { randomPositiveNumber } from 'src/app/form_fields/input_number_int/random-positive-number.formfield';
import { randomNegativeNumber } from 'src/app/form_fields/input_number_int/random-negative-number.formfield';
import { birthdayCallback } from 'src/app/form_fields/input_date/birthday-callback.formfield';
import { birthday } from 'src/app/form_fields/input_date/birthday.formfield';
import { singleSelectDemo } from 'src/app/form_fields/input_single_select/single-select-demo.formfield';
import { singleSelectCallbackDemo } from 'src/app/form_fields/input_single_select/single-select-callback-demo.formfield';
import { selectGirlnameMultiSelect } from 'src/app/form_fields/input_multiple_select/select-girl-name.formfield';
import { selectColorsMultiSelect } from 'src/app/form_fields/input_multiple_select/select-colors-multi.formfield';
import { aboutTextfield } from 'src/app/form_fields/input_text_area/textarea-about.formfield';
import { textAreaAboutCallback } from 'src/app/form_fields/input_text_area/textarea-about-callback.formfield';

@Component({
	imports: [
		BackToMainComponent,
		MaterialFormFieldsComponent,
	],
  selector: 'app-material-form-demo',
  templateUrl: './material-form-demo.component.html',
  styleUrls: ['./material-form-demo.component.scss']
})
export class MaterialFormDemoComponent extends SharedFunctions {

  // Demo of all input fields.
  protected allInputsFieldsCallback: Subject<boolean> = new Subject<boolean>();
  protected readonly allInputsDemo: GenericFormInterface = {
      id: 1,
      formType: FormTypeEnum.REGULAR,
      title: 'Demo Form with All Fields',
      cssClasses: 'demo-container-class',
      showSubmitButton: true,
      showResetButton: true,
      formFields: [
        firstname,
        lastname,
        favoriteFruit,
        favoriteCar,
        payForBook,
        floatCallback,
        randomPositiveNumber,
        randomNegativeNumber,
        birthday,
        birthdayCallback,
        singleSelectDemo,
        singleSelectCallbackDemo,
        selectGirlnameMultiSelect,
        selectColorsMultiSelect,
        aboutTextfield,
        textAreaAboutCallback
      ]
  };

}