export interface FormDataResultInterface {
    hasErrors: boolean,
    errors: string[],
    data: Map<string, any>
}