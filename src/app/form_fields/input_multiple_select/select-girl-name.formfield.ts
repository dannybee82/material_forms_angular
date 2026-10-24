import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const selectGirlnameMultiSelect: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_SELECT_MULTI,
  label: 'Select girl name (Multi)',
  property: 'select_girl_name_multi',
  value: ['Saskia', 'Matilda'],
  cssClasses:
    'select-girl-name-multi-class predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
  ],
  options: [
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
      label: 'Serana',
      value: 'Serana',
    },
    {
      label: 'Victoria',
      value: 'Victoria',
    },
  ],
  useOptionForObservable: false,
  additionalData: [],
};
