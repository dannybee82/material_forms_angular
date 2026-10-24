import { FormValidatorEnum } from 'src/app/models/enums/form-validators.enum';
import { InputTypeEnum } from 'src/app/models/enums/input-type.enum';
import { GenericFormFieldInterface } from 'src/app/models/interfaces/generic-form-field.interface';

export const favoriteCar: GenericFormFieldInterface = {
  inputType: InputTypeEnum.INPUT_TEXT_AUTOCOMPLETE_CALLBACK,
  label: 'Favorite Car (autocomplete with callback)',
  property: 'favorite_car_callback',
  value: '',
  cssClasses: 'favorite-car-class clear-right predefined-flex formfield-width float-left margin-bottom-15 margin-left-10 rounded-borders',
  validations: [
    {
      validation: FormValidatorEnum.REQUIRED,
      value: '',
    },
  ],
  options: [
    {
      label: 'Alfa Romeo',
      value: 1,
    },
    {
      label: 'Batmobile',
      value: 2,
    },
    {
      label: 'Ferrari',
      value: 3,
    },
    {
      label: 'Lada',
      value: 4,
    },
    {
      label: 'Lamborghini',
      value: 5,
    },
    {
      label: 'tMercedes',
      value: 6,
    },
    {
      label: 'Porsche',
      value: 7,
    },
  ],
  useOptionForObservable: true,
  additionalData: [],
};