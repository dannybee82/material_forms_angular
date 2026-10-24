import { Component } from '@angular/core';
import { SharedFunctions } from 'src/app/shared_functions/shared-functions';
import { BackToMainComponent } from 'src/app/components/back-to-main/back-to-main.component';
import { MaterialFormFieldsComponent } from 'src/app/components/material-form-fields/material-form-fields.component';
import { GenericFormInterface } from 'src/app/models/interfaces/generic-form.interface';
import { FormTypeEnum } from 'src/app/models/enums/form-type.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { Subject } from 'rxjs';
import { aboutTextfield } from 'src/app/form_fields/input_text_area/textarea-about.formfield';
import { textAreaAboutCallback } from 'src/app/form_fields/input_text_area/textarea-about-callback.formfield';

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

  protected demoTextAreaCallback: Subject<boolean> = new Subject<boolean>();
  protected demotextAreas: GenericFormInterface = {
      id: 1,
      formType: FormTypeEnum.REGULAR,
      title: 'Demo Form 7 - Text Area\'s',
      cssClasses: 'demo-container-class',
      showSubmitButton: true,
      showResetButton: true,
      formFields: [
        aboutTextfield,
        textAreaAboutCallback
      ]
  };  

}