import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const lastname: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXT_CALLBACK,
  label: 'Lastname (Callback):',
  property: 'lastname_callback',
  value: '',
  cssClasses:
    'lastname-class clear-right predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.PATTERN,
      value: "^[a-zA-Z\W ]+$",
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [],
};