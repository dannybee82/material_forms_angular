import { FormValidatorEnum } from "../enums/form-validators.enum";
import { TimeDataInterface } from "./time-data.interfacte";

export interface GenericFormValidationInterface {
	validation: FormValidatorEnum,
	value: string | number | boolean | TimeDataInterface
}