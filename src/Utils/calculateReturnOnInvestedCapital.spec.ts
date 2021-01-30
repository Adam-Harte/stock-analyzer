import { calculateReturnOnInvestedCapital } from './calculateReturnOnInvestedCapital';

describe('calculateReturnOnInvestedCapital', () => {
  it('returns the return on invested capital', () => {
    const returnOnInvestedCapital = calculateReturnOnInvestedCapital(9431000000, -5707000000, 8797000000, 152186000000);

    expect(returnOnInvestedCapital).toEqual('0.09');
  });
});
