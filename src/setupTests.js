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
  rest.get('https://api.coinstats.app/public/v1/coins', (req, res, ctx) => res(ctx.json({
    coins: [
      {
        id: 'bitcoin',
        icon: 'https://static.coinstats.app/coins/Bitcoin6l39t.png',
        name: 'Bitcoin',
        rank: 1,
        price: 45137.11560416475,
        priceBtc: 1,
        volume: 29984546496.858982,
        marketCap: 849187666064.3407,
        priceChange1h: -0.53,
      }],
  }), ctx.delay(150))),
  rest.get('https://api.coinstats.app/public/v1/coins/bitcoin', (req, res, ctx) => res(ctx.json({
    coin: {
      id: 'bitcoin',
      icon: 'https://static.coinstats.app/coins/Bitcoin6l39t.png',
      name: 'Bitcoin',
      rank: 1,
      price: 45137.11560416475,
      priceBtc: 1,
      volume: 29984546496.858982,
      marketCap: 849187666064.3407,
      priceChange1h: -0.53,
    },
  }), ctx.delay(150))),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
