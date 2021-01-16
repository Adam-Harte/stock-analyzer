import { calculateEbitdaGrowthRate } from './calculateEbitdaGrowthRate';

describe('calculateEbitdaGrowthRate', () => {
  it('returns the ebitda growth rate', () => {
    const ebitdaGrowthRate = calculateEbitdaGrowthRate(11511000000, 16413000000);

    expect(ebitdaGrowthRate).toEqual('-29.87');
  });
});
