import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const floatCallback: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_NUMBER_FLOAT_CALLBACK,
  label: 'Enter value between -25.00 and 25.00:',
  property: 'float_callback_test',
  value: 17.35,
  cssClasses: 'enter-value-between-class predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.MINIMUM_VALUE_FLOAT,
      value: -25.0,
    },
    {
      validation: FormValidatorEnum.MAXIMUM_VALUE_FLOAT,
      value: 25.0,
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [
    {
      attribute: 'step',
      value: 0.01,
    },
    {
      attribute: 'min',
      value: -25.0,
    },
    {
      attribute: 'max',
      value: 25.0,
    },
  ],
};