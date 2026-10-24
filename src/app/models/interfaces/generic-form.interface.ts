import { FormTypeEnum } from "../enums/form-type.enum";
import { GenericFormFieldInterface } from "./generic-form-field.interface";

export interface GenericFormInterface {
	id?: number,
	formType: FormTypeEnum,
	title: string,
	cssClasses: string,
	showSubmitButton: boolean,
	showResetButton: boolean,
	formFields: GenericFormFieldInterface[]
}