import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const randomPositiveNumber: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_NUMBER_INT,
  label: 'Random Positive Number (10-75):',
  property: 'random_positive_number',
  value: 25,
  cssClasses: 'random-positive-number-class predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders clear-left',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.MINIMUM_VALUE_INT,
      value: 10,
    },
    {
      validation: FormValidatorEnum.MAXIMUM_VALUE_INT,
      value: 75,
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
      value: 10,
    },
    {
      attribute: 'max',
      value: 75,
    },
  ],
};