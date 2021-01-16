import { calculateEquityGrowthRate } from './calculateEquityGrowthRate';

describe('calculateEquityGrowthRate', () => {
  it('returns the equity growth rate', () => {
    const equityGrowthRate = calculateEquityGrowthRate(9431000000, 55895000000, 152186000000);

    expect(equityGrowthRate).toEqual('-0.31');
  });
});
