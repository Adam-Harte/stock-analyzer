import { calculateDividendCoverageRatio } from './calculateDividendCoverageRatio';

describe('calculateDividendCoverageRatio', () => {
  it('returns the dividend coverage ratio', () => {
    const dividendCoverageRatio = calculateDividendCoverageRatio(8.823, 6.52);

    expect(dividendCoverageRatio).toEqual('1.35');
  });
});
