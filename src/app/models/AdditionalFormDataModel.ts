export class AdditionalFormDataModel {

    constructor(
        public fieldname: string,
        public data?: any[] | null | undefined,
        public attributes?: object | null | undefined,
    ) {}

}