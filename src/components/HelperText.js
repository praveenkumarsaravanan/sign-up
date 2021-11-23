import React from 'react';
import { Trans } from 'react-i18next';

const HelperText = (props) => {
    return (
        <div className="txt">
            <p><Trans i18nKey={props.helperText1} /></p>
            {props.helperText2 ? <p><Trans i18nKey={props.helperText2}Î /></p> : null }
        </div>
    );
}

export default HelperText;