import { calculateNetDebtToEbitdaRatio } from './calculateNetDebtToEbitdaRatio';

describe('calculateNetDebtToEbitdaRatio', () => {
  it('returns the debt to ebitda ratio', () => {
    const debtToEbitdaRatio = calculateNetDebtToEbitdaRatio(8797000000, 8313000000, 15690000384);

    expect(debtToEbitdaRatio).toEqual('0.03');
  });
});
