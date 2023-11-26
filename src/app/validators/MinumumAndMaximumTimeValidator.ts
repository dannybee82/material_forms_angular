import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import * as moment from 'moment';

export class MinumumAndMaximumTimeValidator {

    private static _types = {
        "days": 'days',
        "weeks": 'weeks',
        "months": 'months',
        "years": 'years'
    }
    
    static CheckMinimumTime(minimum: number, checkType: string) : ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {   
            if(control.value != null) {
                let currentDate: moment.Moment = moment();
                let compareDate: moment.Moment = moment(new Date(control.value));
                
                let unit: moment.unitOfTime.DurationConstructor = 'days';

                let keys: string[] = Object.keys(this._types);
                let found: number = keys.indexOf(checkType.toLowerCase());

                if(found > -1) {
                    const key = keys[found] as keyof typeof this._types;
                    unit = this._types[key] as moment.unitOfTime.DurationConstructor;
                }

                let difference: number = currentDate.diff(compareDate, unit);

                if(difference < minimum) {
                    return {"minimumTime": {"minimumTime": minimum, "actual": difference, "type": checkType}};
                }
            }

            return null;
        }
    }

    static CheckMaximumTime(maximum: number, checkType: string) : ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if(control.value != null) {
                let currentDate: moment.Moment = moment();
                let compareDate: moment.Moment = moment(new Date(control.value));
                
                let unit: moment.unitOfTime.DurationConstructor = 'days';

                let keys: string[] = Object.keys(this._types);
                let found: number = keys.indexOf(checkType.toLowerCase());

                if(found > -1) {
                    const key = keys[found] as keyof typeof this._types;
                    unit = this._types[key] as moment.unitOfTime.DurationConstructor;
                }

                let difference: number = currentDate.diff(compareDate, unit);

                if(difference > maximum) {
                    return {"maximumTime": {"maximumTime": maximum, "actual": difference, "type": checkType}};
                }
            }

            return null;
        }
    }

}