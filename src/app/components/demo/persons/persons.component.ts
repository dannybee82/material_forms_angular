import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { firstname } from 'src/app/form_fields/input_text/first-name.formfield';
import { lastname } from 'src/app/form_fields/input_text/last-name.formfield';
import { birthday } from 'src/app/form_fields/input_date/birthday.formfield';

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

  protected personsDemoCallback: Subject<boolean> = new Subject<boolean>();  
  protected readonly personsDemo: GenericFormInterface = {
      id: 1,
      formType: FormTypeEnum.REGULAR,
      title: 'Persons Demo Form',
      cssClasses: 'demo-container-class',
      showSubmitButton: true,
      showResetButton: true,
      formFields: [
        firstname,
        lastname,
        birthday
      ]
  };

}