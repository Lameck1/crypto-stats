// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

const handlers = [
  rest.get('https://api.coinstats.app/public/v1/coins', (req, res, ctx) => res(ctx.json([{
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/Bitcoin6l39t.png',
    name: 'Bitcoin',
    symbol: 'BTC',
    rank: 1,
    price: 46244.766908363454,
    priceBtc: 1,
    volume: 46924318377.192154,
    marketCap: 869906518242.3385,
    priceChange1h: -0.09,
  }]), ctx.delay(150))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
