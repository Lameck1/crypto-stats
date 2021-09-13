import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import Home from '../Home';

describe('Home', () => {
  it('renders page correctly', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });

  it('loads "Crypto Currencies" on first render', async () => {
    render(<Home />);
    expect(await screen.findByText('Crypto Stats')).toBeInTheDocument();
    expect(await screen.findByText('Bitcoin')).toBeInTheDocument();
  });

  describe('Input Field', () => {
    it('accepts input', async () => {
      render(<Home />);
      const input = screen.getByRole('textbox', { name: '' });
      input.onchange = fireEvent.change(input, { target: { value: 'Bitcoin' } });
      expect(input.value).toBe('Bitcoin');
    });
  });
});
