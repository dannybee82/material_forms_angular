import { InputTypeEnum } from "../enums/input-type.enum";
import { GenericAdditionalDataInterface } from "./generic-additional-data.interface";
import { GenericFormOptionInterface } from "./generic-form-option.interface";
import { GenericFormValidationInterface } from "./generic-form-validation.interface";

export interface GenericFormFieldInterface {
	inputType: InputTypeEnum,
	label: string,
	property: string,
	value: string | number | boolean | Date | string[] | number[] | boolean[],
	cssClasses: string,
	validations: GenericFormValidationInterface[],
	options: GenericFormOptionInterface[],
	useOptionForObservable: boolean,
	additionalData: GenericAdditionalDataInterface[],
}