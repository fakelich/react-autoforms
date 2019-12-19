import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualControlProps, IVirtualControlContext } from '../Models';

export function virtualControl() {
    return function <T extends IVirtualControlProps>(Component: React.ComponentClass<T>) {
        return class extends React.PureComponent<T> {
            render() {
                const { name } = this.props;
                return (
                    <VirtualFormContext.Consumer>
                        {({ state, dispatch }: IVirtualControlContext) => {
                            if (!state.data.hasOwnProperty(name)) {
                                dispatch(name)();
                            }

                            return (
                                <Component
                                    {...this.props}
                                    {...state.errors[name]}
                                    value={state.data[name]}
                                    onChange={dispatch(name)}
                                />
                            );
                        }}
                    </VirtualFormContext.Consumer>
                );
            }
        }
    };
}
