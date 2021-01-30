import { calculateDebtToCapitalRatio } from './calculateDebtToCapitalRatio';

describe('calculateDebtToCapitalRatio', () => {
  it('returns the debt to capital ratio', () => {
    const debtToCapitalRatio = calculateDebtToCapitalRatio(8797000000, 152186000000);

    expect(debtToCapitalRatio).toEqual('0.05');
  });
});
