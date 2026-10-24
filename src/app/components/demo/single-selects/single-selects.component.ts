import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { singleSelectDemo } from 'src/app/form_fields/input_single_select/single-select-demo.formfield';
import { singleSelectCallbackDemo } from 'src/app/form_fields/input_single_select/single-select-callback-demo.formfield';

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

  protected singleSelectsCallback: Subject<boolean> = new Subject<boolean>();
  protected readonly singleSelectsDemo: GenericFormInterface = {
      id: 1,
      formType: FormTypeEnum.REGULAR,
      title: 'Demo Form with Single Selects',
      cssClasses: 'demo-container-class',
      showSubmitButton: true,
      showResetButton: true,
      formFields: [
        singleSelectDemo,
        singleSelectCallbackDemo       
      ]
  };

}