import { Pipe } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Pipe({
    name: "validationFormat"
})
export class ValidationHelper {

    private _fieldsMap: Map<string, string> = new Map<string, string>();

    transform(source: any, name: any, fieldsMap: Map<string, string>) : string[] {
        this._fieldsMap = fieldsMap;

        if (source instanceof FormControl) {
            return this.formatMessages((source as FormControl).errors, name)
        } 
        return this.formatMessages(source as ValidationErrors, name)
    }

    formatMessages(errors: ValidationErrors | null, name: string): string[] {
        let messages: string[] = [];

        for (let errorName in errors) {
            switch (errorName) {
                case "required":
                    messages.push(`A value is required for: ${this._fieldsMap.get(name)}.`);
                    break;
                case "minlength":
                    messages.push(`${this._fieldsMap.get(name)} needs at least ${errors['minlength'].requiredLength} characters.`);
                    break;
                case "maxlength":
                    messages.push(`${this._fieldsMap.get(name)} has a maximum amount of ${errors['maxlength'].requiredLength} characters.`);
                    break;
                case "min":
                    messages.push(`${this._fieldsMap.get(name)} has a too low value: ${errors['min'].actual}, at least needed: ${errors['min'].min}.`);
                    break;
                case "max":
                    messages.push(`${this._fieldsMap.get(name)} has a too high value: ${errors['max'].actual}, must be lower than: ${errors['max'].max}.`);
                    break;
                case "pattern":
                    messages.push(`${this._fieldsMap.get(name)} doesn't match expected pattern.`);
                    break;
                case "minimumFloat":
                    messages.push(`${this._fieldsMap.get(name)} has a value of ${errors['minimumFloat'].actual} that is lower than minimum: ${errors['minimumFloat'].minimum}.`);
                    break;
                case "maximumFloat":
                    messages.push(`${this._fieldsMap.get(name)} has a value of ${errors['maximumFloat'].actual} that is higher than maximum: ${errors['maximumFloat'].maximum}.`);
                    break;
                case "minimumTime":
                    messages.push(`${this._fieldsMap.get(name)}${errors['minimumTime'].type} is too low: ${errors['minimumTime'].actual} - must be higher or equal to: ${errors['minimumTime'].minimumTime}.`);
                    break;
                case "maximumTime":
                    messages.push(`${this._fieldsMap.get(name)}${errors['maximumTime'].type} is too high ${errors['maximumTime'].actual} - must be lower or equal to: ${errors['maximumTime'].maximumTime}.`);
                    break;
            }         
        }

        return messages;
    }
}