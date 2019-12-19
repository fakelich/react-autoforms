import React from 'react';
import { IVirtualFormProps, IVirtualFormState, IVirtualControlError, IVirtualControlDetails } from '../Models';
import { createValidator } from '../Utils';
import { VirtualFormContext } from '../Consts';

/** It creates virtual form. It is component that agregate virtual controls from its children and provide API to manage entire form data. */
export function virtualForm<D>() {
    return function <T extends IVirtualFormProps<D> = IVirtualFormProps<D>>(Component: React.ComponentClass<T>) {
        /** Virtual form. */
        return class extends React.Component<T, IVirtualFormState<D>> {
            static displayName = 'Autoform';

            state: IVirtualFormState<D> = {
                data: this.props.defaultData,
                errors: {},
            };

            validator = createValidator(this.props.validationScheme);

            updateControlValue = ({ name, value }: IVirtualControlDetails) => {
                this.setState(({ data, errors }) => ({
                    data: {
                        ...data,
                        [name]: value,
                    },
                    errors: {
                        ...errors,
                        [name]: {},
                    },
                }), () => this.props.onChange && this.props.onChange(this.state.data));
            }

            updateControlState = (name: string, error: IVirtualControlError<any>) => {
                this.setState(({ data, errors }) => ({
                    data: {
                        ...data,
                        [name]: error.value,
                    },
                    errors: {
                        ...errors,
                        [name]: error,
                    }
                }), () => this.props.onChange && this.props.onChange(this.state.data));
            }

            dispatch = (name: string) => {
                return (value?: any) => {
                    this.validator.single(name, value)
                        .then(this.updateControlValue)
                        .catch((error) => this.updateControlState(name, error));
                };
            }

            handleSubmit = (value: D) => {
                const { action, onSubmit } = this.props;
                if (action) {
                    action(value)
                        .then(() => onSubmit && onSubmit(value))
                        .catch(() => onSubmit && onSubmit(value));
                } else {
                    onSubmit && onSubmit(value);
                }
            }

            submit = () => {
                this.validator.list(this.state.data)
                    .then(this.handleSubmit)
                    .catch(this.props.onError);
            }

            render() {
                const { state, dispatch, props, submit } = this;

                return (
                    <VirtualFormContext.Provider value={{
                        state,
                        dispatch,
                        submit
                    }}>
                        <Component {...props} />
                    </VirtualFormContext.Provider>
                );
            }
        }
    }
}
