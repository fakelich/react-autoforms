import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualSubmitterProps, IVirtualControlContext } from '../Models';

export function virtualControl() {
    return function <T extends IVirtualSubmitterProps>(Component: React.ComponentClass<T>) {
        return class extends React.PureComponent<T> {
            render() {
                return (
                    <VirtualFormContext.Consumer>
                        {({ submit }: IVirtualControlContext) => (
                            <Component
                                {...this.props}
                                onSubmit={submit}
                            />
                        )}
                    </VirtualFormContext.Consumer>
                );
            }
        }
    };
}
