import { calculatePriceToFreeCashFlowRatio } from './calculatePriceToFreeCashFlowRatio';

describe('calculatePriceToFreeCashFlowRatio', () => {
  it('returns the price to free cash flow ratio', () => {
    const priceToFreeCashFlowRatio = calculatePriceToFreeCashFlowRatio(114402811904, 100500802);

    expect(priceToFreeCashFlowRatio).toEqual('1138.33');
  });
});
