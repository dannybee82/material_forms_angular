import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const payForBook: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_NUMBER_INT,
  label: 'Pay for second hand book (10.00 - 100.00):',
  property: 'pay_for_book',
  value: 10.05,
  cssClasses: 'pay-for-second-hand-book-class predefined-flex formfield-width float-left clear-left margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.MINIMUM_VALUE_FLOAT,
      value: 10.0,
    },
    {
      validation: FormValidatorEnum.MAXIMUM_VALUE_FLOAT,
      value: 100.0,
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
      value: 10.0,
    },
    {
      attribute: 'max',
      value: 100.0,
    },
  ],
};