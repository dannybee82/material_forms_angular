import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const emailFormField: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXT,
  label: 'Emailaddress:',
  property: 'emailaddress',
  value: '',
  cssClasses:
    'email-class clear-left predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.EMAIL,
      value: '',
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [],
};