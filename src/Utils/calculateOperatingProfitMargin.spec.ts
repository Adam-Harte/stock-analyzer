import { calculateOperatingProfitMargin } from './calculateOperatingProfitMargin';

describe('calculateOperatingProfitMargin', () => {
  it('returns the operating profit margin', () => {
    const operatingProfitMargin = calculateOperatingProfitMargin(10543000000, 77147000000);

    expect(operatingProfitMargin).toEqual('0.14');
  });
});
