import { IVScheme, IValidatonFunctions } from './Models';
export declare function createValidator<T>(validationScheme: {
    [key in keyof T]: IVScheme<T>;
}): IValidatonFunctions;
