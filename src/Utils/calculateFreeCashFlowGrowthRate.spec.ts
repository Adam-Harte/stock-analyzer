import { calculateFreeCashFlowGrowthRate } from './calculateFreeCashFlowGrowthRate';

describe('calculateFreeCashFlowGrowthRate', () => {
  it('returns the free cash flow growth rate', () => {
    const freeCashFlowGrowthRate = calculateFreeCashFlowGrowthRate(200, 320);

    expect(freeCashFlowGrowthRate).toEqual('0.60');
  });
});
