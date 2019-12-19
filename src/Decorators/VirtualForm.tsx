import React from 'react';
import { IVirtualFormProps, IVirtualFormState, IVirtualControlError, IVirtualControlDetails } from '../Models';
import { createValidator } from '../Utils';
import { VirtualFormContext } from '../Consts';

export function virtualForm<D>() {
    return function <T extends IVirtualFormProps<D> = IVirtualFormProps<D>>(Component: React.ComponentClass<T>) {
        return class extends React.Component<T, IVirtualFormState<D>> {

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

            updateControlState = (error: IVirtualControlError<any>) => {
                this.setState(({ errors }) => ({
                    errors: {
                        ...errors,
                        ...error
                    }
                }), () => this.props.onChange && this.props.onChange(this.state.data));
            }

            dispatch = (name: string) => {
                return (value: any) => {
                    this.validator.single(value, name)
                        .then(this.updateControlValue)
                        .catch(this.updateControlState);
                };
            }

            submit = () => {
                this.validator.list(this.state.data)
                    .then(this.props.onSubmit)
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
