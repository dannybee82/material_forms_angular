import { FORM_CONTROL_TYPES, FORM_VALIDATORS } from "../components/form-controls/SetFormControls";
import { AdditionalFormDataModel } from "./AdditionalFormDataModel";

export class FormDataModel {

    constructor(public fieldName: string,
                public fieldDescription: string,
                public fieldLabel: string,
                public fieldType: FORM_CONTROL_TYPES,
                public fieldCssClass?: string | undefined,
                public fieldAdditionalData?: AdditionalFormDataModel | undefined | null,
                public fieldValidatorsTypes?: FORM_VALIDATORS[] | undefined | null,
                public fieldValidatorValues?: any[] | undefined | null
    ) {}

}