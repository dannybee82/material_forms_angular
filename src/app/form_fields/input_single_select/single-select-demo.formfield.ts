import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const singleSelectDemo: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_SELECT,
  label: 'Select girl name',
  property: 'select_girl_name',
  value: 'Saskia',
  cssClasses: 'select-girl-name-class predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
  ],
  options: [
    {
      label: 'Abigaïl',
      value: 'Abigaïl',
    },
    {
      label: 'Jane',
      value: 'Jane',
    },
    {
      label: 'Matilda',
      value: 'Matilda',
    },
    {
      label: 'Saskia',
      value: 'Saskia',
    },
    {
      label: 'Victoria',
      value: 'Victoria',
    },
  ],
  useOptionForObservable: false,
  additionalData: [],
};
