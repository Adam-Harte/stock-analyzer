import { calculatePriceToOperatingCashFlow } from './calculatePriceToOperatingCashFlow';

describe('calculatePriceToOperatingCashFlow', () => {
  it('returns the price to operating cash flow', () => {
    const priceToOperatingCashFlow = calculatePriceToOperatingCashFlow(114402811904, 14770000000);

    expect(priceToOperatingCashFlow).toEqual('7.75');
  });
});
