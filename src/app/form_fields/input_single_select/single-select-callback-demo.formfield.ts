import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const singleSelectCallbackDemo: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_SELECT_CALLBACK,
  label: 'Select Color',
  property: 'select_color',
  value: 'White',
  cssClasses: 'select-color-class predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
  ],
  options: [
    {
      label: 'Black',
      value: 'Black',
    },
    {
      label: 'Blue',
      value: 'Blue',
    },
    {
      label: 'Green',
      value: 'Green',
    },
    {
      label: 'Red',
      value: 'Red',
    },
    {
      label: 'Yellow',
      value: 'Yellow',
    },
    {
      label: 'White',
      value: 'White',
    },
  ],
  useOptionForObservable: false,
  additionalData: [],
};
