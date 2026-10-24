import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { FormValidatorEnum } from "src/app/models/enums/form-validators.enum";
import { GenericFormFieldInterface } from "src/app/models/interfaces/generic-form-field.interface";
import { InputTypeEnum } from "src/app/models/enums/input-type.enum";
import { GenericAdditionalDataInterface } from "src/app/models/interfaces/generic-additional-data.interface";
import { MinimumAndMaximumFloatValidator } from "../validators/minimum-and-maximum-float.validator";
import { ValidationHelper } from "../pipes/validation-helper.pipe";
import { GenericFormValidationInterface } from "src/app/models/interfaces/generic-form-validation.interface";
import { MinumumAndMaximumTimeValidator } from "../validators/minimum-and-maximum-time.validator";
import { TimeDataInterface } from "../models/interfaces/time-data.interfacte";

export class SetFormControls extends ValidationHelper {

    public formControlFieldsMap = new Map<string, string>([]);
    public formControlLabels: string[] = [];                         
    public formControlNames: string[] = [];                          
    public formControlTypes: InputTypeEnum[] = [];
    public formControlCssClasses: string[] = [];
    public additionalFormData: Map<string, GenericAdditionalDataInterface[]> = new Map<string, GenericAdditionalDataInterface[]>([]);
    
    public formDataObservables: Map<string, Observable<string[] | number[] | boolean[]>> = new Map<string,  Observable<string[] | number[] | boolean[]>>();

    public formControlGroup: FormGroup = new FormGroup({});
    
    constructor(formData: GenericFormFieldInterface[] | undefined) {
        super();

        if(formData) {
            formData.forEach((item: GenericFormFieldInterface) => {
                this.addToFieldMap(item.property, item.label);
                this.addFormControlLabel(item.label);
                this.addFormControlName(item.property);
                this.addFormControlType(item.inputType);

                if(item.additionalData) {
                    this.addAdditionalData(item.property, item.additionalData);                    
                }
                
                if(item.useOptionForObservable) {
                    this.setObservable(item.property, new Observable<string[] | number[] | boolean[]>);                    
                }

                if(item.cssClasses != undefined) {
                    this.addFormCssClasses(item.cssClasses);
                }

                this.addFormControl(item.property, item.validations);
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

    getObservable(property: string) : Observable<string[] | number[] | boolean[]> | undefined {
        const obs: Observable<string[] | number[] | boolean[]> | undefined = this.formDataObservables.get(property);
        return obs;
    }

    setObservable(property: string, obs: Observable<string[] | number[] | boolean[]>) : void {
        this.formDataObservables.set(property, obs);        
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

    private addFormControlType(type: InputTypeEnum) : void {
        this.formControlTypes.push(type);
    }

    private addFormCssClasses(cssClasses: string) : void {
        this.formControlCssClasses.push(cssClasses);
    }

    private addAdditionalData(property: string, additionalData: GenericAdditionalDataInterface[]) : void {
        this.additionalFormData.set(property, additionalData);        
    }

    getAdditionalDataAttribute(property: string, attribute: string) : GenericAdditionalDataInterface | undefined {
        const data: GenericAdditionalDataInterface[] | undefined = this.additionalFormData.get(property);

        if(data) {
            const attrFound: GenericAdditionalDataInterface | undefined = data.find(item => item.attribute === attribute);
            return attrFound;
        }

        return undefined;
    }

    private addFormControl(property: string, validators: GenericFormValidationInterface[] | undefined | null) : void {
        let formControl: FormControl = new FormControl();

        if(validators) {
            for(let i = 0; i < validators.length; i++) {
                switch(validators[i].validation) {
                    case FormValidatorEnum.REQUIRED:
                        formControl.addValidators(Validators.required);
                        break;
                    case FormValidatorEnum.MIN_LENGTH:
                        formControl.addValidators(Validators.minLength(parseInt(validators[i].toString())));
                        break;
                    case FormValidatorEnum.MAX_LENGTH:
                        formControl.addValidators(Validators.maxLength(parseInt(validators[i].value.toString())));
                        break;
                    case FormValidatorEnum.MINIMUM_VALUE_INT:
                        formControl.addValidators(Validators.min(parseInt(validators[i].value.toString())));                        
                        break;
                    case FormValidatorEnum.MAXIMUM_VALUE_INT:
                        formControl.addValidators(Validators.max(parseInt(validators[i].value.toString()))); 
                        break;
                    case FormValidatorEnum.PATTERN:
                        formControl.addValidators(Validators.pattern(new RegExp(validators[i].value.toString())));
                        break;
                    case FormValidatorEnum.MINIMUM_VALUE_FLOAT:
                        formControl.addValidators(MinimumAndMaximumFloatValidator.Minimum(parseFloat(validators[i].value.toString())));
                        break;
                    case FormValidatorEnum.MAXIMUM_VALUE_FLOAT:
                        formControl.addValidators(MinimumAndMaximumFloatValidator.Maximum(parseFloat(validators[i].value.toString())));
                        break;
                    case FormValidatorEnum.EMAIL:
                        formControl.addValidators(Validators.email);
                        break;
                    case FormValidatorEnum.MINIMUM_TIME:
                        let minObj: TimeDataInterface = validators[i].value as TimeDataInterface;
                        if(minObj.value && minObj.type) {
                            formControl.addValidators(MinumumAndMaximumTimeValidator.CheckMinimumTime(minObj.value, minObj.type.toString()));
                        }                        
                        break;
                    case FormValidatorEnum.MAXIMUM_TIME:
                        let maxObj: TimeDataInterface = validators[i].value as TimeDataInterface;
                        if(maxObj.value && maxObj.type) {
                            formControl.addValidators(MinumumAndMaximumTimeValidator.CheckMaximumTime(maxObj.value, maxObj.type.toString()));
                        }                        
                        break;
                }
            }
        }        

        //Add control with name.
        this.formControlGroup.addControl(property, formControl);
    }
    
}