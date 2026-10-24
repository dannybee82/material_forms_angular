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

export const birthday: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_DATE,
  label: 'Birth Date (age 18-65):',
  property: 'birth_date_normal',
  value: new Date(),
  cssClasses: 'birth-date-class predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
        validation: FormValidatorEnum.MINIMUM_TIME,
        value: minimumCheck
    },
    {
        validation: FormValidatorEnum.MAXIMUM_TIME,
        value: maximumCheck
    }
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [],
};