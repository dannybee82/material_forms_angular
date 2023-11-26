import { FormGroup } from "@angular/forms";

export class FormDataResponse {

    constructor(public formGroup: FormGroup,
                public errors: string[]
    ) {}

}