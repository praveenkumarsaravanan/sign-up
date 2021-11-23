import { render, screen } from '@testing-library/react';
import Layout from './Layout';



test('Layout : renders the Layout content with header, main & footer', () => {
    render(<Layout header={<h1>Header</h1>} main={<div>Main Block</div>} footer={<div>Footer Block</div>} />);

    // verify page content for expected route
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();


    // verify page content for expected route
    const main = screen.getByText(/Main Block/i, { selector: 'div' });
    expect(main).toBeInTheDocument();

    // verify page content for expected route
    const footer = screen.getByText(/Footer Block/i, { selector: 'div' });
    expect(footer).toBeInTheDocument();
});


test('Layout : renders the Layout content with header & main', () => {
    render(<Layout header={<h1>Header</h1>} main={<div>Main Block</div>} />);

    // verify page content for expected route
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();


    // verify page content for expected route
    const main = screen.getByText(/Main Block/i, { selector: 'div' });
    expect(main).toBeInTheDocument();

});

test('Layout : renders the Layout content with header only', () => {
    render(<Layout header={<h1>Header</h1>} />);

    // verify page content for expected route
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();


});