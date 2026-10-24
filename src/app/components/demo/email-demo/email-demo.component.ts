import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { Subject } from 'rxjs';
import { emailFormField } from 'src/app/form_fields/input_text/email.formfield';

@Component({
  selector: 'app-email-demo',
  imports: [MaterialFormFieldsComponent, BackToMainComponent],
  templateUrl: './email-demo.component.html',
  styleUrl: './email-demo.component.scss'
})
export class EmailDemoComponent extends SharedFunctions {

    protected readonly emailDemo: GenericFormInterface = {
        id: 1,
        formType: FormTypeEnum.REGULAR,
        title: 'Email Demo Form',
        cssClasses: 'demo-container-class',
        showSubmitButton: true,
        showResetButton: true,
        formFields: [
          emailFormField
        ]
    };

}
