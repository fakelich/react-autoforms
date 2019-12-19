import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualControlProps, IVirtualControlContext } from '../Models';

export function virtualControl() {
    return function <T extends IVirtualControlProps>(Component: React.ComponentClass<T>) {
        return class extends React.Component<T> {
            render() {
                const { name } = this.props;
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
