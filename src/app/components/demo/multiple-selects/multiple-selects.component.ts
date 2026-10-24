import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { selectGirlnameMultiSelect } from 'src/app/form_fields/input_multiple_select/select-girl-name.formfield';
import { selectColorsMultiSelect } from 'src/app/form_fields/input_multiple_select/select-colors-multi.formfield';

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

  protected multipleSelectDemoCallback: Subject<boolean> = new Subject<boolean>();
  protected readonly multipleSelectDemo: GenericFormInterface = {
      id: 1,
      formType: FormTypeEnum.REGULAR,
      title: 'Demo with Multiple Selects',
      cssClasses: 'demo-container-class',
      showSubmitButton: true,
      showResetButton: true,
      formFields: [
        selectGirlnameMultiSelect,
        selectColorsMultiSelect      
      ]
  };

}