import { calculateFreeCashFlow } from './calculateFreeCashFlow';

describe('calculateFreeCashFlow', () => {
  it('returns the free cash flow', () => {
    const freeCashFlow = calculateFreeCashFlow(14770000000, 2286000000);

    expect(freeCashFlow).toEqual('12484000000.00');
  });
});
