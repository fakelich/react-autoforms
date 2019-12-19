import React from 'react';
import { IVirtualFormProps, IVirtualFormState, IVirtualControlError, IVirtualControlDetails } from '../Models';
export declare function virtualForm<D>(): <T extends IVirtualFormProps<D> = IVirtualFormProps<D>>(Component: React.ComponentClass<T, any>) => {
    new (props: Readonly<T>): {
        state: IVirtualFormState<D>;
        validator: import("../Models").IValidatonFunctions;
        updateControlValue: ({ name, value }: IVirtualControlDetails<any>) => void;
        updateControlState: (error: IVirtualControlError<any>) => void;
        dispatch: (name: string) => (value?: any) => void;
        submit: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "data" | "errors">(state: IVirtualFormState<D> | ((prevState: Readonly<IVirtualFormState<D>>, props: Readonly<T>) => IVirtualFormState<D> | Pick<IVirtualFormState<D>, K> | null) | Pick<IVirtualFormState<D>, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<IVirtualFormState<D>>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<IVirtualFormState<D>>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): void;
    };
    new (props: T, context?: any): {
        state: IVirtualFormState<D>;
        validator: import("../Models").IValidatonFunctions;
        updateControlValue: ({ name, value }: IVirtualControlDetails<any>) => void;
        updateControlState: (error: IVirtualControlError<any>) => void;
        dispatch: (name: string) => (value?: any) => void;
        submit: () => void;
        render(): JSX.Element;
        context: any;
        setState<K extends "data" | "errors">(state: IVirtualFormState<D> | ((prevState: Readonly<IVirtualFormState<D>>, props: Readonly<T>) => IVirtualFormState<D> | Pick<IVirtualFormState<D>, K> | null) | Pick<IVirtualFormState<D>, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<T> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<T>, prevState: Readonly<IVirtualFormState<D>>): any;
        componentDidUpdate?(prevProps: Readonly<T>, prevState: Readonly<IVirtualFormState<D>>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<T>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<T>, nextState: Readonly<IVirtualFormState<D>>, nextContext: any): void;
    };
    contextType?: React.Context<any> | undefined;
};
