import React from 'react';
import { VirtualFormContext } from '../Consts';
import { IVirtualControlProps, IVirtualControlContext } from '../Models';

/** It creates a control from suitable component. */
export function virtualControl() {
    /**
     * @param Component Controlled form control.
     */
    return function <T>(Component: React.ComponentClass<T & IVirtualControlProps>): React.ComponentClass<T & Pick<IVirtualControlProps, 'name' | 'id'>> {
        /** Uncontrolled form control. */
        return class extends React.PureComponent<T & Pick<IVirtualControlProps, 'name' | 'id'>> {
            static displayName = 'VirtualControl';

            render() {
                const { name } = this.props;
                return (
                    <VirtualFormContext.Consumer>
                        {({ state, dispatch }: IVirtualControlContext) => (
                            <Component
                                {...this.props}
                                {...state.errors[name]}
                                value={state.data[name] || ''}
                                onChange={dispatch(name)}
                            />
                        )}
                    </VirtualFormContext.Consumer>
                );
            }
        }
    };
}
