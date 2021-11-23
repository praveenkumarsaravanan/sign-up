import { render, screen } from '@testing-library/react';
import Header from './Header';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';


test('Header : renders the header content ', () => {
    render(<I18nextProvider i18n={i18n}><Header heading1="Let's" heading2="Sign Up" /></I18nextProvider>);

    const heading = screen.getByRole('heading', { name: /Let's/i, name: /Sign Up/i });
    expect(heading).toBeInTheDocument();
});


test('Header : renders the header content with dynamic attribute(s)', () => {
    render(<I18nextProvider i18n={i18n}><Header heading1="Let's" heading2={{ name: "Praveen Kumar Saravanan" }} /></I18nextProvider>);

    const heading = screen.getByRole('heading', { name: /Let's/i, name: /Praveen Kumar Saravanan/i });
    expect(heading).toBeInTheDocument();
});