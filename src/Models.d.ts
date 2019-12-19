import { EVirtualControl } from './Enums';
export interface IVirtualFormState<D> {
    data: D;
    errors: {
        [key in keyof D]?: IVirtualControlError<any>;
    };
}
export interface IVirtualControlError<T = any> {
    value: T;
    state: EVirtualControl;
    errorText: string;
}
export interface IVirtualControlDetails<T = any> {
    value: T;
    name: string;
}
export interface IVirtualControlProps<T = any> extends IVirtualControlError<T> {
    id: string;
    name: string;
    value: T;
    onChange(newValue: T): void;
}
export interface IVirtualFormProps<D> {
    defaultData: D;
    validationScheme: any;
    onChange?(newValue: any): void;
    onSubmit?(value: any): void;
}
export interface IVirtualControlContext<D = any> {
    state: {
        [key in keyof D]?: any;
    };
    dispatch(name: string): (value: any) => void;
}
interface IVDefaultScheme {
    message?: string;
}
interface IVDateScheme<T = boolean> extends IVDefaultScheme {
    earliest?: Date | string | number;
    latest?: Date | string | number;
    dateOnly?: T;
}
interface IVEmailScheme extends IVDefaultScheme {
}
interface IVEqualityScheme<T> extends IVDefaultScheme {
    attribute?: keyof T;
    comparator?(v1: any, v2: any): boolean;
}
declare type TVComparingValue = number | string;
interface IVListComparingScheme extends IVDefaultScheme {
    within: TVComparingValue[] | {
        [key: number]: string;
        [key: string]: string;
    };
}
interface IVFormatScheme extends IVDefaultScheme {
    pattern: string | RegExp;
    flags?: 'i' | 'g';
}
interface IVLengthScheme extends IVDefaultScheme {
    is?: number;
    maximum?: number;
    minimum?: number;
    notValid?: string;
    tooLong?: string;
    tooShort?: string;
    wrongLength?: string;
    tokenizer?(value: string): string;
}
interface IVNumericalityScheme extends IVDateScheme {
    noStrings?: boolean;
    onlyIntenger?: boolean;
    strict?: boolean;
    greaterThan?: number;
    greaterThanOrEqualTo?: number;
    equalTo?: number;
    lessThanOrEqualTo?: number;
    lessThan?: number;
    divisibleBy?: number;
    odd?: boolean;
    even?: boolean;
    notValid?: string;
    notInteger?: string;
    notGreaterThan?: string;
    notGreaterThanOrEqualTo?: string;
    notEqualTo?: string;
    notLessThan?: string;
    notLessThanOrEqualTo?: string;
    notDivisibleBy?: string;
    notOdd?: string;
    notEven?: string;
}
interface IVPresenceScheme extends IVDefaultScheme {
    allowEmpty?: boolean;
}
declare type TVAllowedTypes = 'array' | 'integer' | 'number' | 'string' | 'date' | 'boolean' | string;
interface IVTypeScheme extends IVDefaultScheme {
    type: ((v: any) => boolean) | TVAllowedTypes;
}
interface IVUrlScheme extends IVDefaultScheme {
    schemes?: string[];
    allowLocal?: boolean;
    allowDataUrL?: boolean;
}
export interface IVScheme<T> {
    date?: IVDateScheme<true> | boolean;
    datetime?: IVDateScheme | boolean;
    email?: IVEmailScheme | boolean;
    equality?: IVEqualityScheme<T> | keyof T;
    exclusion?: IVListComparingScheme | TVComparingValue[];
    format?: RegExp | IVFormatScheme;
    inclusion?: IVListComparingScheme | TVComparingValue[];
    length?: IVLengthScheme;
    numericality?: boolean | IVNumericalityScheme;
    presence?: boolean | IVPresenceScheme;
    type?: TVAllowedTypes | IVTypeScheme;
    url?: boolean | IVUrlScheme;
}
export {};
