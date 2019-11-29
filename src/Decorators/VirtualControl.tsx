import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualControlOptions, IVirtualControlProps, IVirtualControlContext } from '../Models';

export function virtualControl({ name }: IVirtualControlOptions) {
    return function <T extends IVirtualControlProps>(Component: React.ComponentClass<T>) {
        return class extends React.Component<T> {
            render() {
                return (
                    <VirtualFormContext.Consumer>
                        {({ state, dispatch }: IVirtualControlContext) => (
                            <Component
                                {...this.props}
                                value={state[name]}
                                onChange={dispatch(name)}
                            />
                        )}
                    </VirtualFormContext.Consumer>
                );
            }
        }
    };
}
