import { calculateOperatingCashFlowGrowthRate } from './calculateOperatingCashFlowGrowthRate';

describe('calculateOperatingCashFlowGrowthRate', () => {
  it('returns the operating cash flow growth rate', () => {
    const operatingCashFlowGrowthRate = calculateOperatingCashFlowGrowthRate(17008000000, 14770000000);

    expect(operatingCashFlowGrowthRate).toEqual('-0.13');
  });
});
