import { render, screen } from '@testing-library/react';
import UserRegistratonConfirmation from './UserRegistratonConfirmation';

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
    render(<UserRegistratonConfirmation />);
    const heading = screen.getByRole('heading', { name: /Welcome/i, name: /!/i });
    expect(heading).toBeInTheDocument();
});

test('renders helper Text', () => {
    render(<UserRegistratonConfirmation />);
    const helperText1 = screen.getByText(/You have been registered for this awesome service./i, { selector: 'p' });
    expect(helperText1).toBeInTheDocument();
    const helperText2 = screen.getByText(/Please check your email listed below for instructions./i, { selector: 'p' });
    expect(helperText2).toBeInTheDocument();

});

test('renders Sign In Button', () => {
    render(<UserRegistratonConfirmation />);
    const signInButton = screen.getByText(/Sign In/i, { selector: 'button' });
    expect(signInButton).toBeInTheDocument();
});