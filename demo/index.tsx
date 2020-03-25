import React from 'react';
import { render, createPortal } from 'react-dom';
import { Autoform } from '../';

interface IInputProps {
    label: string;
}

type TInputProps = IInputProps & Autoform.IVirtualControlProps;

type IOuterInputProps = IInputProps & Pick<Autoform.IVirtualControlProps, 'id' | 'name'>;

interface IInputState {
    value: string;
}

function createRegularInput(type: string): React.ComponentType<IOuterInputProps> {
    @Autoform.virtualControl()
    class Input extends React.Component<TInputProps, IInputState> {

        state: IInputState = {
            value: '',
        }

        handleChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => {
            this.setState({ value }, () => this.props.onChange && this.props.onChange(value));
        }

        render () {
            const {id, label, value} = this.props;

            return (
                <label htmlFor={id}>
                    <span>{label}</span>
                    <input {...this.props} type={type} onChange={this.handleChange} value={value || this.state.value} />
                </label>
            );
        }
    }

    return Input;
}

@Autoform.virtualControl()
class Multiline extends React.Component<TInputProps, IInputState> {

    state: IInputState = {
        value: '',
    }

    handleChange = ({ currentTarget: { value } }: React.FormEvent<HTMLTextAreaElement>) => {
        this.setState({ value }, () => this.props.onChange && this.props.onChange(value));
    }
    
    render() {
        const { id, label, value } = this.props;

        return (
            <label htmlFor={id}>
                <span>{label}</span>
                <textarea {...this.props} onChange={this.handleChange} value={value || this.state.value} />
            </label>
        );
    }
}

const TextField = {
    Basic: createRegularInput('text'),
    Password: createRegularInput('password'),
    Email: createRegularInput('email'),
    Number: createRegularInput('number'),
    Phone: createRegularInput('phone'),
    Multiline,
};

@Autoform.virtualSubmitter()
class Submit extends React.Component<Autoform.IVirtualSubmitterProps> {
    render() {
        return <button type="submit" onClick={this.props.onSubmit}>OK</button>
    }
}

const Button = {
    Submit,
}

@Autoform.virtualForm()
class CustomForm extends React.Component<Autoform.IVirtualFormProps<any>> {
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                {this.props.children}
            </form>
        );
    }
}

interface IState {
    controls: {
        component: React.ComponentType<any>;
        id: string;
        name: string;
        label: string;
    }[];
    data: any;
    showForm: boolean;
    result: string;
}

class Container extends React.Component<{}, IState> {
    state: IState = {
        controls: [],
        data: {},
        showForm: false,
        result: '',
    }

    showForm = async () => {
        return new Promise((resolve) => {
            createPortal(
                <div style={{ position: 'fixed', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
                    <CustomForm
                        defaultData={{
                            id: Date.now().toString(36),
                            name: '',
                            label: '',
                        }}
                        validationScheme={{}}
                        onSubmit={resolve}
                    >
                        <TextField.Basic
                            name="name"
                            id="name"
                            label="Control name"
                        />
                        <TextField.Basic
                            id="Label"
                            name="label"
                            label="Label"
                        />
                        <Button.Submit />
                    </CustomForm>
                </div>,
                document.querySelector('#root') as HTMLElement,
            );
        });
    }

    handleChangeFactory = (component: React.ComponentType) => () => {
        this.showForm().then(({ id, name, label }) => {
            this.setState(({ controls }) => ({
                controls: [
                    ...controls, {
                        component,
                        id,
                        name,
                        label,
                    },
                ],
            }));
        })
    }

    renderTextFields = () => {
        const textfields = Object.keys(TextField);

        return textfields.map((key: keyof typeof TextField) => {
            <button className="add-control-btn" onClick={this.handleChangeFactory(TextField[key])}>
                {`Add ${key} textfield.`}
            </button>
        });
    }

    render() {
        return (
            <div className="main-container">
                <div className="preview-form">
                    <CustomForm
                        validationScheme={{}}
                        defaultData={{}}
                        onSubmit={(data) => this.setState({ result: JSON.stringify(data) })}
                    >
                        {this.state.controls.map(({
                            component: Component,
                            name,
                            label,
                            id
                        }) => (
                            <Component
                                id={id}
                                name={name}
                                label={label}
                            />
                        ))}
                    </CustomForm>
                </div>
                <div className="settings">
                    <div className="settings-fields">
                        {this.renderTextFields()}
                    </div>
                    <div className="submit-result">
                        {this.state.result}
                    </div>
                </div>
            </div>
        );
    }
}

render(
    <Container />,
    document.querySelector('#root'),
);
