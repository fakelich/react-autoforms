import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualSubmitterProps, IVirtualControlContext } from '../Models';

/** It creates a form submitter from suitable component. */
export function virtualSubmitter() {
    return function <T extends IVirtualSubmitterProps>(Component: React.ComponentClass<T>) {
        /** Linked submitter. */
        return class extends React.PureComponent<T> {
            static displayName = 'VirtualSubmitter';

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
