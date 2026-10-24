import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const textAreaAboutCallback: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXTAREA_CALLBACK,
  label: 'About Callback (Max: 250 characters)',
  property: 'textarea_about_callback',
  value: '',
  cssClasses:
    'textarea-about-callback predefined-flex formfield-width float-left clear-right margin-left-10 rounded-borders',
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
      value: 250,
    },
  ],
  options: [],
  useOptionForObservable: false,
  additionalData: [
    {
      attribute: 'rows',
      value: 8,
    },
    {
      attribute: 'cols',
      value: 150,
    },
  ],
};