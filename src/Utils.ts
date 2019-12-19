import { validator } from './Consts';
import { IVScheme, IVirtualControlDetails, IVirtualControlError } from './Models';
import { EVirtualControl } from './Enums';

export function createValidator<T>(validationScheme: {[key in keyof T]: IVScheme<T>}) {
    return (name: string, value: any): Promise<IVirtualControlDetails | IVirtualControlError> => new Promise((resolve, reject) => {
        const results = validator({[name]: value}, validationScheme);

        if (results && Object.keys(results).length) {
            reject({
                state: EVirtualControl.ERROR,
                errorText: results[name][0],
                value,
            } as IVirtualControlError);
        } else {
            resolve({
                name,
                value,
            } as IVirtualControlDetails);
        }
    });
}
