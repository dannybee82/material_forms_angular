import { Observable } from "rxjs";

export class FormDataObservables {

    constructor(public fieldname: string,
                public value: Observable<any[]>){}

}