import React from 'react';
import { render, fireEvent, screen } from '../test-utils';
import App from '../App';

describe('App', () => {
  it('renders page correctly', () => {
    render(<App />);
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });

  it('it loads "Crypto Currencies" on first render', async () => {
    render(<App />);
    expect(await screen.findByText('Bitcoin')).toBeInTheDocument();
  });

  it('navigates to Details and displays cryptocurrency details', async () => {
    render(<App />);
    expect(await screen.findByText('Bitcoin')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Bitcoinlogo Bitcoin 45137.12' }));
    expect(await screen.findByText('Bitcoin stats')).toBeInTheDocument();
  });
});
