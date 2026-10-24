import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import moment from 'moment';

export class MinumumAndMaximumTimeValidator {

    private static readonly _types: Record<string, moment.unitOfTime.Diff> = {  
        days: 'days',  
        weeks: 'weeks',  
        months: 'months',  
        years: 'years',  
    };  
  
    static CheckMinimumTime(minimum: number, checkType: string): ValidatorFn {  
        const unit = this._types[checkType?.toLowerCase()] ?? 'days';  
    
        return (control: AbstractControl): ValidationErrors | null => {  
            const value = control.value;  
            if (value === null || value === undefined || value === '') {  
                return null;
            }  
        
            let compareDate: moment.Moment;  
            if (moment.isMoment(value)) {  
                compareDate = value.clone();  
            } else if (value instanceof Date) {  
                compareDate = moment(value);  
            } else {  
                compareDate = moment(value, ['DD-MM-YYYY', 'D-M-YYYY', 'DD/MM/YYYY', moment.ISO_8601], true);  
            }  
        
            if (!compareDate.isValid()) {  
                return { invalidDate: true };  
            }  
        
            let currentDate: moment.Moment = moment();
            const difference = currentDate.diff(compareDate, unit);
            const rev = compareDate.diff(currentDate, unit);
            const ai = moment().startOf(unit).diff(compareDate.startOf(unit), unit);

            return difference < minimum  
                ? { minimumTime: { minimumTime: minimum, actual: difference, type: checkType } }  
                : null;  
        };
    }  
    
    static CheckMaximumTime(maximum: number, checkType: string) : ValidatorFn {
        const unit = this._types[checkType?.toLowerCase()] ?? 'days';  
    
        return (control: AbstractControl): ValidationErrors | null => {  
            const value = control.value;  
            if (value === null || value === undefined || value === '') {  
                return null;
            }  
        
            let compareDate: moment.Moment;  
            if (moment.isMoment(value)) {  
                compareDate = value.clone();  
            } else if (value instanceof Date) {  
                compareDate = moment(value);  
            } else {  
                compareDate = moment(value, ['DD-MM-YYYY', 'D-M-YYYY', 'DD/MM/YYYY', moment.ISO_8601], true);  
            }  
        
            if (!compareDate.isValid()) {
                return { invalidDate: true };  
            }  
        
            const difference = moment().startOf('day').diff(compareDate.startOf('day'), unit);  
        
            return difference > maximum  
                ? { maximumTime: { maximumTime: maximum, actual: difference, type: checkType } }  
                : null;  
        };        
    }

}