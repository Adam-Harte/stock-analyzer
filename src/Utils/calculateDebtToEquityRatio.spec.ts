import { calculateDebtToEquityRatio } from './calculateDebtToEquityRatio';

describe('calculateDebtToEquityRatio', () => {
  it('returns the debt to equity ratio', () => {
    const debtToEquityRatio = calculateDebtToEquityRatio(131202000000, 20841000000);

    expect(debtToEquityRatio).toEqual('6.30');
  });
});
