import { calculateAssetTurnoverRatio } from './calculateAssetTurnoverRatio';

describe('calculateAssetTurnoverRatio', () => {
  it('returns the asset turnover ratio', () => {
    const assetTurnoverRatio = calculateAssetTurnoverRatio(77147000000, 152186000000);

    expect(assetTurnoverRatio).toEqual('0.51');
  });
});
