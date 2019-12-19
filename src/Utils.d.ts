import { IVScheme, IVirtualControlDetails, IVirtualControlError } from './Models';
export declare function createValidator<T>(validationScheme: {
    [key in keyof T]: IVScheme<T>;
}): (name: string, value: any) => Promise<IVirtualControlError<any> | IVirtualControlDetails<any>>;
