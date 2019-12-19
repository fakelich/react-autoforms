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
    state: {[key in keyof D]?: any};
    dispatch(name: string): (value: any) => void;
}


// ================================ VALIDATE.JS TYPINGS ====================================
/** Default validation options. */
interface IVDefaultScheme {
    message?: string;
}

/** Date validation scheme. */
interface IVDateScheme<T = boolean> extends IVDefaultScheme {
    /** The date cannot be before this time. This argument will be parsed using the parse function, just like the value. The default error must be no earlier than %{date} */
    earliest?: Date | string | number;
    /** The date cannot be after this time. This argument will be parsed using the parse function, just like the value. The default error must be no later than %{date} */
    latest?: Date | string | number;
    /** If true, only dates (not datetimes) will be allowed. The default error is must be a valid date. */
    dateOnly?: T;
}

/** Email validation scheme. */
interface IVEmailScheme extends IVDefaultScheme {}

/** Equality validation scheme. */
interface IVEqualityScheme<T> extends IVDefaultScheme {
    /** You specify which attribute by simply using the name of it as the options for the validator or by giving the option attribute. */
    attribute?: keyof T;
    /** By default === is used to check the quality, it you need to validate more complex objects you can give a function using the comparator option which should be a function that accepts two arguments and returns true if they objects are equal and false if they are not. */
    comparator?(v1: any, v2: any): boolean;
}

/** List of values that available for comparing. */
type TVComparingValue = number | string;


/** List comparing validation scheme. */
interface IVListComparingScheme extends IVDefaultScheme {
    /** You can specify within as a list or as an object (in which case the keys of the object are used). The default message is ^%{value} is restricted and can be changed by setting validate.validators.exclusion.message */
    within: TVComparingValue[] | {
        [key: number]: string;
        [key: string]: string;
    };
}


/** Format validation scheme. */
interface IVFormatScheme extends IVDefaultScheme {
    /** The pattern option can either be a javascript regexp or string that will be passed to the RegExp constructor. */
    pattern: string | RegExp;
    /** If the pattern is a string and you want to specify flags you may use the flags option. */
    flags?: 'i' | 'g';
}


/** Length validation scheme. */
interface IVLengthScheme extends IVDefaultScheme {
    /** The value has to have exactly this length. The default error is is the wrong length (should be %{count} characters). */
    is?: number;
    /** The value cannot be longer than this value. The default error is is too long (maximum is %{count} characters). */
    maximum?: number;
    /** The value cannot be shorter than this value. The default error is is too short (minimum is %{count} characters). */
    minimum?: number;
    /** You can specify the error message. */
    notValid?: string;
    /** You can specify the error message. */
    tooLong?: string;
    /** You can specify the error message. */
    tooShort?: string;
    /** You can specify the error message. */
    wrongLength?: string;
    /** Per default the number of characters are counted (using the length property), if you want to count something else you can specify the tokenizer option which should be a function that takes a single argument (the value) and the returns a value that should be used when counting. */
    tokenizer?(value: string): string;
}


/** Numericality validation scheme. */
interface IVNumericalityScheme extends IVDateScheme {
    /** Per default strings are coerced to numbers using the + operator. If this is not desirable you can set the option to true to disable this behaviour. */
    noStrings?: boolean;
    /** Real numbers won't be allowed. The error message is must be an integer. */
    onlyIntenger?: boolean;
    /** Enables more strict validation of strings. Leading zeroes won't be allowed and the number cannot be malformed. */
    strict?: boolean;
    /** The input has to be greater than this value. The error message is must be greater than %{count}. */
    greaterThan?: number;
    /** The input has to be at least this value. The error message is must be greater than or equal to %{count}. */
    greaterThanOrEqualTo?: number;
    /** The input has to be exactly this value. The error message is must be equal to %{count}. */
    equalTo?: number;
    /** The input can be this value at the most. The error message is must be less than or equal to %{count}. */
    lessThanOrEqualTo?: number;
    /** The input has to be less than this value. The error message is must be less than %{count}. */
    lessThan?: number;
    /** The input has to be divisible by this value. The error message is must be divisible by %{count}. */
    divisibleBy?: number;
    /** The input has to be odd. The error message is must be odd. */
    odd?: boolean;
    /** The input has to be even. The error message is must be even. */
    even?: boolean;
    /** You can specify errors. */
    notValid?: string;
    /** You can specify errors. */
    notInteger?: string;
    /** You can specify errors. */
    notGreaterThan?: string;
    /** You can specify errors. */
    notGreaterThanOrEqualTo?: string;
    /** You can specify errors. */
    notEqualTo?: string;
    /** You can specify errors. */
    notLessThan?: string;
    /** You can specify errors. */
    notLessThanOrEqualTo?: string;
    /** You can specify errors. */
    notDivisibleBy?: string;
    /** You can specify errors. */
    notOdd?: string;
    /** You can specify errors. */
    notEven?: string;
}


/** Presence validation scheme. */
interface IVPresenceScheme extends IVDefaultScheme {
    /** Additionally you can set the option to false to disallow the empty objects, empty arrays, empty string and whitespace only string. */
    allowEmpty?: boolean;
}

/** List of default types. */
type TVAllowedTypes = 'array' | 'integer' | 'number' | 'string' | 'date' | 'boolean' | string;


/** Types validation scheme. */
interface IVTypeScheme extends IVDefaultScheme {
    type: ((v: any) => boolean) | TVAllowedTypes;
}


/** Url validation scheme. */
interface IVUrlScheme extends IVDefaultScheme {
    /** A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example [".+"]). The default value is ["http", "https"]. */
    schemes?: string[];
    /** A boolean that if true allows local hostnames such as 10.0.1.1 or localhost. The default is false. */
    allowLocal?: boolean;
    /** A boolean that if true allows data URLs as defined in RFC 2397. The default is false. */
    allowDataUrL?: boolean;
}


/** Common validation scheme. */
export interface IVScheme<T> {
    /** The date validator is just a shorthand for the datetime validator with the dateOnly option set to true. */
    date?: IVDateScheme<true> | boolean;
    /** This datetime validator can be used to validate dates and times. */
    datetime?: IVDateScheme | boolean;
    /** The email validator attempts to make sure the input is a valid email. */
    email?: IVEmailScheme | boolean;
    /** The equality validator can be used to verify that one attribute is always equal to another. */
    equality?: IVEqualityScheme<T> | keyof T;
    /** The exclusion validator is useful for restriction certain values. It checks that the given value is not in the list given by options. */
    exclusion?: IVListComparingScheme | TVComparingValue[];
    /** The format validator will validate a value against a regular expression of your chosing. The default message if the value doesn't match is is invalid so you'll likely want to customize it by settings message to something in the options or by setting a new global default message using validate.validators.format.message. */
    format?: RegExp | IVFormatScheme;
    /** The inclusion validator is useful for validating input from a dropdown for example. It checks that the given value exists in the list given by the within option. */
    inclusion?: IVListComparingScheme | TVComparingValue[];
    /** The length validator will check the length of a string. */
    length?: IVLengthScheme;
    /** The numericality validator will only allow numbers. Per default strings are coerced to numbers using the + operator. */
    numericality?: boolean | IVNumericalityScheme;
    /** The presence validator validates that the value is defined. This validator will probably the most used one, it corresponds to HTML5's required attribute. */
    presence?: boolean | IVPresenceScheme;
    /** The type validator ensures that the input is of the correct type. */
    type?: TVAllowedTypes | IVTypeScheme;
    /**
     * The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator follows a gist that can be found on the link below.
     * @see {@link https://gist.github.com/dperini/729294}
     */
    url?: boolean | IVUrlScheme;
}
