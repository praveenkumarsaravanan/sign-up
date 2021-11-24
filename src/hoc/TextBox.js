import { React } from "react";
import { useTranslation } from 'react-i18next';

const InputElement = (props) => {

    const customProps = Object.assign({}, props);
    delete customProps.i18nKey;
    delete customProps.label;

    const { t } = useTranslation();
    let labelTxt = props.label ? t(props.i18nKey) : null;

    return <div className="form-field">
        {props.label && labelTxt ? <label htmlFor={props.id}><strong>{labelTxt}</strong></label> : null}
        <input {...customProps} label={labelTxt} />
    </div>
}

const TextBox = (WrappedComponent) => (props) => {

    return (
        <WrappedComponent {...props} />
    );
}

export default TextBox(InputElement);
