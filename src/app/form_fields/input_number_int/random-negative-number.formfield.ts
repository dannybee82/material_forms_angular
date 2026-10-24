import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const randomNegativeNumber: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_NUMBER_INT_CALLBACK,
  label: 'Random Negative Number:',
  property: 'random_negative_number_callback',
  value: -25,
  cssClasses: 'random-negative-number-class predefined-flex formfield-width float-left clear-right margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.MINIMUM_VALUE_INT,
      value: -75,
    },
    {
      validation: FormValidatorEnum.MAXIMUM_VALUE_INT,
      value: -10,
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [
    {
      attribute: 'step',
      value: 1,
    },
    {
      attribute: 'min',
      value: -75,
    },
    {
      attribute: 'max',
      value: -25,
    },
  ],
};
