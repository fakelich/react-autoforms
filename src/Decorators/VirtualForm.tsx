import React from 'react';
import { IVirtualFormOptions, IVirtualFormProps, IVirtualFormState, IVirtualControlError } from '../Models';
import { createValidator } from '../Utils';
import { VirtualFormContext } from '../Consts';

export function virtualForm<D>({
    defaultData,
    validationScheme,
}: IVirtualFormOptions<D>) {
    return function <T extends IVirtualFormProps = IVirtualFormProps>(Component: React.ComponentClass<T>) {
        return class extends React.Component<T, IVirtualFormState<D>> {

            state: IVirtualFormState<D> = {
                data: defaultData,
                errors: {},
            };

            validator = createValidator(validationScheme);

            updateControlValue(name: keyof D, value: any) {
                this.setState(({ data, errors }) => ({
                    data: {
                        ...data,
                        [name]: value,
                    },
                    errors: {
                        ...errors,
                        [name]: {},
                    },
                }), () => this.props.onChange && this.props.onChange(this.state));
            }

            updateControlState(error: IVirtualControlError<any>) {
                this.setState(({ errors }) => ({
                    errors: {
                        ...errors,
                        ...error
                    }
                }), () => this.props.onChange && this.props.onChange(this.state));
            }

            dispatch(name: keyof D) {
                return function (value: any) {
                    this.validator(name, value)
                        .then(this.updateControlValue)
                        .catch(this.updateControlState);
                };
            }

            submit() {
                this.props.onSubmit && this.props.onSubmit(this.state);
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
