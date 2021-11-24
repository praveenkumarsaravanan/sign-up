import { render, screen } from '@testing-library/react';
import HelperText from './HelperText';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';


test('HelperText : renders the helper text content', () => {
    render(<I18nextProvider i18n={i18n}><HelperText helperText1="signUp.helperText" /></I18nextProvider>);

    const helperText = screen.getByText(/Use the form below to sign up for this super awesome service. You're only a few steps away!/i, { selector: 'p' });
    expect(helperText).toBeInTheDocument();
});

test('HelperText : renders the helper text content with two props', () => {
    render(<I18nextProvider i18n={i18n}><HelperText helperText1="signUpConfirmation.helperText1" helperText2="signUpConfirmation.helperText2" /></I18nextProvider>);

    const helperText1 = screen.getByText(/You have been registered for this awesome service./i, { selector: 'p' });
    expect(helperText1).toBeInTheDocument();
    const helperText2 = screen.getByText(/Please check your email listed below for instructions./i, { selector: 'p' });
    expect(helperText2).toBeInTheDocument();
});