import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const favoriteFruit: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXT_AUTOCOMPLETE,
  label: 'Favorite Fruit (autocomplete)',
  property: 'favorite_fruit',
  value: '',
  cssClasses:
    'favorite-fruit-class clear-left predefined-flex formfield-width float-left margin-bottom-15 margin-left-10',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
  ],
  options: [
    {
      label: 'Ananas',
      value: 'ananas',
    },
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Black Berry',
      value: 'black berry',
    },
    {
      label: 'Peach',
      value: 'peach',
    },
    {
      label: 'Pear',
      value: 'pear',
    },
    {
      label: 'Strawberry',
      value: 'strawberry',
    },
  ],
  useOptionForObservable: true,
  additionalData: [],
};