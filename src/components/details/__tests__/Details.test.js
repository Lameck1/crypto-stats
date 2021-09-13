import React from 'react';
import { render, screen } from '../../../test-utils';
import Details from '../Details';

describe('Details', () => {
  render(<Details />);
  it('renders page correctly', () => {
    const tree = render(<Details />);
    expect(tree).toMatchSnapshot();
  });
  it("displays crytocurrency's details", async () => {
    render(<Details />);
    expect(await screen.findByText('Rank')).toBeInTheDocument();
    expect(await screen.findByText('Volume')).toBeInTheDocument();
    expect(await screen.findByText('Market Cap')).toBeInTheDocument();
    expect(await screen.findByText('Price in Bitcoin')).toBeInTheDocument();
    expect(await screen.findByText('Hourly Price Change')).toBeInTheDocument();
  });
});
