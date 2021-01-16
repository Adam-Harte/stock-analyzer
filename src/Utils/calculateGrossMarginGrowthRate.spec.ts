import { calculateGrossMarginGrowthRate } from './calculateGrossMarginGrowthRate';

describe('calculateGrossMarginGrowthRate', () => {
  it('returns the gross margin growth rate', () => {
    const grossMarginGrowthRate = calculateGrossMarginGrowthRate(77147000000, 40659000000);

    expect(grossMarginGrowthRate).toEqual('47.30');
  });
});
