import { EVirtualControl } from './Enums';

export interface IVirtualFormState<D> {
    data: D;
    errors: {[key in keyof D]?: IVirtualControlError<any>};
}

export interface IVirtualControlError<T = any> {
    value: T;
    state: EVirtualControl;
    errorText: string;
}

export interface IVirtualControlOptions {
    id: string;
    name: string;
}

export interface IVirtualControlProps<T = any> extends IVirtualControlOptions, IVirtualControlError<T> {
    value: T;
    onChange(newValue: T): void;
}

export interface IVirtualFormProps {
    onChange?(newValue: any): void;
    onSubmit?(value: any): void;
}

export interface IVirtualFormOptions<D> {
    defaultData: D;
    validationScheme: any;
}

export interface IVirtualControlContext<D = any> {
    state: {[key in keyof D]?: any};
    dispatch(name: string): (value: any) => void;
}
