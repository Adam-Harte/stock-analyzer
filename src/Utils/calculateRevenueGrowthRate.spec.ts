import { calculateRevenueGrowthRate } from './calculateRevenueGrowthRate';

describe('calculateRevenueGrowthRate', () => {
  it('returns the revenue growth rate', () => {
    const revenueGrowthRate = calculateRevenueGrowthRate(81741000000, 77147000000, 5);

    expect(revenueGrowthRate).toEqual('-5.62');
  });
});
