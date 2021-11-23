import React from 'react';
import { Trans } from 'react-i18next';

const Header = (props) => {
    return (
        <h1>
            <Trans i18nKey={props.i18nKey}>
                <span className="font-weight-normal">{props.heading1}</span><span className="header-title-block">{props.heading2}</span>
            </Trans>
        </h1>
    );
}

export default Header;