import { DatePipe } from "@angular/common";
import { DataFromInput } from "../models/DataFromInput";
import { FormDataModel } from "../models/FormDataModel";
import { FormDataResponse } from "../models/FormDataResponse";

export class SharedFunctions {

    public formControls: FormDataModel[] = [];

    public output: string = "";
    public errors: string[] = [];

    private datePipe: DatePipe = new DatePipe('nl-NL');

    showData(formDataResponse: FormDataResponse): void {
        if (formDataResponse.formGroup.valid) {
            this.errors = [];
            this.output = '';

            let allFieldNames: string[] = [];

            this.formControls.forEach(item => allFieldNames.push(item.fieldName));

            allFieldNames.forEach(item => {
                if (item === 'birth_date' || item === 'birth_date_callback') {
                    let date: Date = (formDataResponse.formGroup.get(item)?.value) as Date;
                    this.output += formDataResponse.formGroup.get(item)?.value !== '' ? this.datePipe.transform(date, 'dd-MM-YYYY') : '???';
                } else {
                    this.output += formDataResponse.formGroup.get(item)?.value !== '' ? formDataResponse.formGroup.get(item)?.value : '???';
                }

                this.output += "<br/>";
            });
        } else {
            this.output = "Contains invalid data.";
            this.errors = formDataResponse.errors;
        }
    }

    receiveCallback(data: DataFromInput): void {
        if (data.name === 'birth_date_callback') {
            try {
                let date = data.value as Date;
                let dateTransformed = this.datePipe.transform(date, 'dd-MM-YYYY') || '';

                this.output = "Data From callback: " + data.index + " - " + data.name + " - " + dateTransformed;
            } catch {
                this.output = "Data From callback: " + data.index + " - " + data.name + " - " + 'date is invalid';
            }
        } else {
            this.output = "Data From callback: " + data.index + " - " + data.name + " - " + data.value;
        }
    }

}