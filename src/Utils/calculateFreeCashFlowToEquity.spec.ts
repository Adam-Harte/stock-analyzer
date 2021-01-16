import { calculateFreeCashFlowToEquity } from './calculateFreeCashFlowToEquity';

describe('calculateFreeCashFlowToEquity', () => {
  it('returns the free cahs flow to equity', () => {
    const freeCashFlowToEquity = calculateFreeCashFlowToEquity(8313000000, 2286000000, 8797000000);

    expect(freeCashFlowToEquity).toEqual('14824000000.00');
  });
});
