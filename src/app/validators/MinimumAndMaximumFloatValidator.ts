import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class MinimumAndMaximumFloatValidator {

    static Minimum(min: number) : ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let val = parseFloat(control.value);

            if(isNaN(val)) {
                return {"minimumFloat": {"minimum": min, "actual": 'invalid input'}};
            }

            if(val < min) {
                return {"minimumFloat": {"minimum": min, "actual": val}};
            }
            return null;
        }
    }

    static Maximum(max: number) : ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            let val = parseFloat(control.value);

            if(isNaN(val)) {
                return {"maximumFloat": {"maximum": max, "actual": 'invalid input'}};
            }

            if(val > max) {
                return {"maximumFloat": {"maximum": max, "actual": val}};
            }
            return null;
        }
    }

}