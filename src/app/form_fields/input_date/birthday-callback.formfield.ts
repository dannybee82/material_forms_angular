import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';
import { TimeDataInterface } from 'src/app/models/interfaces/time-data.interfacte';

export const minimumCheck: TimeDataInterface = {
  value: 18, 
  type: 'years' 
}

export const maximumCheck: TimeDataInterface = { 
  value: 65, 
  type: 'years' 
};

export const birthdayCallback: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_DATE_CALLBACK,
  label: 'Birth Date (age 18-65 + Callback):',
  property: 'birth_date_callback',
  value: '',
  cssClasses: 'birth-date-callback-class predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    }
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [],
};