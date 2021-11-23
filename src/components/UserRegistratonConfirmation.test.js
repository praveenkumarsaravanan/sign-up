import { render, screen } from '@testing-library/react';
import UserRegistratonConfirmation from './UserRegistratonConfirmation';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

const userRegistrationConfirmationComponent = () => {
    return <I18nextProvider i18n={i18n}><UserRegistratonConfirmation /></I18nextProvider>
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: () => ({
        state: {
            name: 'Praveen Kumar Saravanan',
            email: 'be.praveen@gmail.com'
        },
    }),
}))

test('renders Welcome {firstName}! content', () => {
    render(userRegistrationConfirmationComponent());
    const heading = screen.getByRole('heading', { name: /Welcome/i, name: /!/i });
    expect(heading).toBeInTheDocument();
});

test('renders helper Text', () => {
    render(userRegistrationConfirmationComponent());
    const helperText1 = screen.getByText(/You have been registered for this awesome service./i, { selector: 'p' });
    expect(helperText1).toBeInTheDocument();
    const helperText2 = screen.getByText(/Please check your email listed below for instructions./i, { selector: 'p' });
    expect(helperText2).toBeInTheDocument();

});

test('renders Sign In Button', () => {
    render(userRegistrationConfirmationComponent());
    const signInButton = screen.getByText(/Sign In/i, { selector: 'button' });
    expect(signInButton).toBeInTheDocument();
});