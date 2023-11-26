import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AdditionalFormDataModel } from "../../models/AdditionalFormDataModel";
import { FormDataModel } from "src/app/models/FormDataModel";
import { ValidationHelper } from "src/app/pipes/ValidationHelper";
import { FormDataObservables } from "src/app/models/FormDataObservables";
import { Observable } from "rxjs";
import { MinimumAndMaximumFloatValidator } from "src/app/validators/MinimumAndMaximumFloatValidator";
import { MinumumAndMaximumTimeValidator } from "src/app/validators/MinumumAndMaximumTimeValidator";

export enum FORM_CONTROL_TYPES {
    INPUT_TEXT = 0,
    INPUT_TEXT_CALLBACK = 1,
    INPUT_TEXT_AUTOCOMPLETE = 2,
    INPUT_TEXT_AUTOCOMPLETE_CALLBACK = 3,
    INPUT_NUMBER_INT = 4,
    INPUT_NUMBER_INT_CALLBACK = 5,
    INPUT_NUMBER_FLOAT = 6,
    INPUT_NUMBER_FLOAT_CALLBACK = 7,
    INPUT_DATE = 8,
    INPUT_DATE_CALLBACK = 9,
    INPUT_SELECT = 10,
    INPUT_SELECT_CALLBACK = 11,
    INPUT_SELECT_MULTI = 12,
    INPUT_SELECT_MULTI_CALLBACK = 13,
    INPUT_TEXTAREA = 14,
    INPUT_TEXTAREA_CALLBACK = 15
}

export enum FORM_VALIDATORS {
    REQUIRED = 0,
    MIN_LENGTH = 1,
    MAX_LENGTH = 2,
    MINIMUM_VALUE_INT = 3,
    MAXIMUM_VALUE_INT = 4,
    PATTERN = 5,
    MINIMUM_VALUE_FLOAT = 6,
    MAXIMUM_VALUE_FLOAT = 7,
    MINIMUM_TIME = 8,
    MAXIMUM_TIME = 9,
}

export class SetFormControls extends ValidationHelper {

    public formControlFieldsMap = new Map<string, string>([]);
    public formControlLabels: string[] = [];                         
    public formControlNames: string[] = [];                          
    public formControlTypes: FORM_CONTROL_TYPES[] = [];
    public formControlCssClasses: string[] = [];
    public additionalFormData: AdditionalFormDataModel[] = [];

    public formDataObservables: FormDataObservables[] = [];

    public formControlGroup: FormGroup = new FormGroup({});
    
    constructor(formData: FormDataModel[] | undefined) {
        super();

        if(formData != undefined) {
            formData.forEach(item => {
                this.addToFieldMap(item.fieldName, item.fieldDescription);
                this.addFormControlLabel(item.fieldLabel);
                this.addFormControlName(item.fieldName);
                this.addFormControlType(item.fieldType);

                if(item.fieldAdditionalData != undefined) {
                    this.addAdditionalData(item.fieldAdditionalData);
                    this.setObservables(item.fieldName, item.fieldType);
                }
                
                if(item.fieldCssClass != undefined) {
                    this.addFormCssClasses(item.fieldCssClass);
                }

                this.addFormControl(item.fieldName, item.fieldValidatorsTypes, item.fieldValidatorValues);
            })
        }        
    }

    getErrors() : string[] {
        if(this.formControlGroup != undefined) {
            let errors: string[] = [];

            this.formControlGroup.markAllAsTouched();

            Object.keys(this.formControlGroup.controls).forEach(k => {
                this.transform(this.formControlGroup.controls[k].errors, k, this.formControlFieldsMap).forEach(m => errors.push(m));
            });

            return errors;
        }

        return [];
    }

    getObservable(fieldname: string) : Observable<any[]> | undefined {
        if(this.formDataObservables.length > 0) {
            for(let i = 0; i < this.formDataObservables.length; i++) {
                if(this.formDataObservables[i].fieldname === fieldname) {
                    return this.formDataObservables[i].value;
                }
            }
        }        

        return undefined;
    }

    setObservable(fieldname: string, obs: Observable<any>) : void {
        if(this.formDataObservables.length > 0) {
            for(let i = 0; i < this.formDataObservables.length; i++) {
                if(this.formDataObservables[i].fieldname === fieldname) {
                    this.formDataObservables[i].value = obs;
                }
            }
        }
    }

    getFormControlByName(fieldname: string) : FormControl | undefined {
        if(this.formControlGroup != undefined && this.formControlGroup != null) {
            if(this.formControlGroup.get(fieldname) !== undefined && this.formControlGroup.get(fieldname) !== null) {
                return this.formControlGroup.get(fieldname) as FormControl;
            }
        }

        return undefined;
    }

    private addToFieldMap(property: string, description: string) : void {
        this.formControlFieldsMap.set(property, description);
    }

    private addFormControlLabel(description: string) : void {
        this.formControlLabels.push(description);
    }

    private addFormControlName(property: string) : void {
        this.formControlNames.push(property);
    }

    private addFormControlType(type: number | FORM_CONTROL_TYPES) : void {
        this.formControlTypes.push(type);
    }

    private addFormCssClasses(cssClasses: string) : void {
        this.formControlCssClasses.push(cssClasses);
    }

    private addAdditionalData(additionalData: AdditionalFormDataModel) : void {
        this.additionalFormData.push(additionalData);
    }

    private getAdditionalData(property: string) : AdditionalFormDataModel | undefined {
        if(this.additionalFormData != undefined) {
            for(let i = 0; i < this.additionalFormData.length; i++) {
                if(this.additionalFormData[i].fieldname === property) {
                    return this.additionalFormData[i];
                }
            }
        }        

        return undefined;
    }

    private addFormControl(property: string, validators: FORM_VALIDATORS[] | undefined | null, values: any[] | undefined | null) : void {
        let formControl: FormControl = new FormControl();
        
        let additionalData: AdditionalFormDataModel | undefined = this.getAdditionalData(property);

        if(additionalData != undefined) {
            if(additionalData.attributes != undefined) {
                let obj: object = additionalData.attributes;
                let keys = Object.keys(obj);
                let values: any = Object.values(obj);
                let found: number = keys.indexOf("value");

                if(found > -1) {
                    //formControl = new FormControl(values[found]);
                    formControl.setValue(values[found]);
                }
            }
        }

        if(validators != undefined && values != undefined) {
            for(let i = 0; i < validators.length; i++) {
                switch(validators[i]) {
                    case FORM_VALIDATORS.REQUIRED:
                        formControl.addValidators(Validators.required);
                        break;
                    case FORM_VALIDATORS.MIN_LENGTH:
                        formControl.addValidators(Validators.minLength(parseInt(values[i].toString())));
                        break;
                    case FORM_VALIDATORS.MAX_LENGTH:
                        formControl.addValidators(Validators.maxLength(parseInt(values[i].toString())));
                        break;
                    case FORM_VALIDATORS.MINIMUM_VALUE_INT:
                        formControl.addValidators(Validators.min(parseInt(values[i].toString())));                        
                        break;
                    case FORM_VALIDATORS.MAXIMUM_VALUE_INT:
                        formControl.addValidators(Validators.max(parseInt(values[i].toString()))); 
                        break;
                    case FORM_VALIDATORS.PATTERN:
                        formControl.addValidators(Validators.pattern(new RegExp(values[i])));
                        break;
                    case FORM_VALIDATORS.MINIMUM_VALUE_FLOAT:
                        formControl.addValidators(MinimumAndMaximumFloatValidator.Minimum(parseFloat(values[i].toString())));
                        break;
                    case FORM_VALIDATORS.MAXIMUM_VALUE_FLOAT:
                        formControl.addValidators(MinimumAndMaximumFloatValidator.Maximum(parseFloat(values[i].toString())));
                        break;
                    case FORM_VALIDATORS.MINIMUM_TIME:
                        let minObj: any = values[i];
                        formControl.addValidators(MinumumAndMaximumTimeValidator.CheckMinimumTime(parseInt(minObj.value.toString()), minObj.type.toString()));
                        break;
                    case FORM_VALIDATORS.MAXIMUM_TIME:
                        let maxObj: any = values[i];
                        formControl.addValidators(MinumumAndMaximumTimeValidator.CheckMaximumTime(parseInt(maxObj.value.toString()), maxObj.type.toString()));
                        break;
                }
            }
        }        

        //Add control with name.
        this.formControlGroup.addControl(property, formControl);
    }

    private setObservables(fieldname: string, type: FORM_CONTROL_TYPES) : void {
        if(type === FORM_CONTROL_TYPES.INPUT_TEXT_AUTOCOMPLETE || type === FORM_CONTROL_TYPES.INPUT_TEXT_AUTOCOMPLETE_CALLBACK) {
            this.formDataObservables.push(
                new FormDataObservables(fieldname, new Observable<any[]>())
            );
        }
    }
    
}