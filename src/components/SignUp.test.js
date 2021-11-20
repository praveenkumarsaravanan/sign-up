import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('renders all Input elements along with Labels', () => {
  render(<SignUp />);
  
  const firstNameLabel = screen.getByLabelText(/First Name/i);
  expect(firstNameLabel).toBeInTheDocument();
  const firstNameElement = screen.getByTestId(/firstName/i);
  expect(firstNameElement).toBeInTheDocument();

  const emailLabel = screen.getByLabelText(/Email Address/i);
  expect(emailLabel).toBeInTheDocument();
  const emailElement = screen.getByTestId(/email/i);
  expect(emailElement).toBeInTheDocument();

  const passwordLabel = screen.getByLabelText(/Password/i);
  expect(passwordLabel).toBeInTheDocument();
  const passwordElement = screen.getByTestId(/password/i);
  expect(passwordElement).toBeInTheDocument();
  
});

test('renders helper Text', () => {
  render(<SignUp/>);
  const heading =  screen.getByText(/Use the form below to sign up for this super awesome service. You're only a few steps away!/i, {selector: 'p' }); 
  expect(heading).toBeInTheDocument();
});


test('renders Lets Sign Up Text', () => {
  render(<SignUp />);
  const heading =  screen.getByRole('heading', { name: /Let's/i, name: /Sign up/i }); 
  expect(heading).toBeInTheDocument();
});


test('renders SignUp Button', () => {
  render(<SignUp />);
  const signUpButton = screen.getByText(/Sign Up/i, { selector: 'button' });
  expect(signUpButton).toBeInTheDocument();
});