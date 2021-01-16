import { calculateDebtToEbitdaRatio } from './calculateDebtToEbitdaRatio';

describe('calculateDebtToEbitdaRatio', () => {
  it('returns the debt to ebitda ratio', () => {
    const debtToEbitdaRatio = calculateDebtToEbitdaRatio(8797000000, 15690000384);

    expect(debtToEbitdaRatio).toEqual('0.56');
  });
});
