import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const aboutTextfield: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXTAREA,
  label: 'About (Max: 125 characters)',
  property: 'textarea_about_normal',
  value: '',
  cssClasses: 'textarea-about predefined-flex formfield-width float-left margin-left-10 clear-left rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
    {
      validation: FormValidatorEnum.MIN_LENGTH,
      value: 1,
    },
    {
      validation: FormValidatorEnum.MAX_LENGTH,
      value: 125,
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [
    {
      attribute: 'rows',
      value: 5,
    },
    {
      attribute: 'cols',
      value: 150,
    },
  ],
};