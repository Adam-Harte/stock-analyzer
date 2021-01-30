import { calculateEpsGrowthRate } from './calculateEpsGrowthRate';

describe('calculateEpsGrowthRate', () => {
  it('returns a negative eps growth rate', () => {
    const growthRate = calculateEpsGrowthRate(13.6, 6.6);

    expect(growthRate).toEqual('-51.47');
  });

  it('returns a positive eps growth rate', () => {
    const growthRate = calculateEpsGrowthRate(6.1, 8.3);

    expect(growthRate).toEqual('36.07');
  });
});
