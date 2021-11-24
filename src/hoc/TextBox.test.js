import { render, screen } from '@testing-library/react';
import TextBox from './TextBox';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

test('TextInput : renders the First Name Element with Label', () => {
    render(<I18nextProvider i18n={i18n}><TextBox autoFocus i18nKey="signUp.firstName" label id="firstName" type="text" name="firstName" value="" onChange={() => { return }} required aria-required data-testid="firstName" /></I18nextProvider>);

    const firstNameLabel = screen.getByLabelText(/First Name/i);
    expect(firstNameLabel).toBeInTheDocument();
    const firstNameElement = screen.getByTestId(/firstName/i);
    expect(firstNameElement).toBeInTheDocument();

});

test('TextInput : renders the First Name Element Only', () => {
    render(<I18nextProvider i18n={i18n}><TextBox autoFocus i18nKey="signUp.firstName"  id="firstName" type="text" name="firstName" value="" onChange={() => { return }} required aria-required data-testid="firstName" /></I18nextProvider>);
    
    const firstNameElement = screen.getByTestId(/firstName/i);
    expect(firstNameElement).toBeInTheDocument();

});