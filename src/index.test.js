import app from './index'

describe('sanity', () => {
  it('should do what Chad wants', () => {
    expect(app('1 pound butter')).toEqual({
      quantity: '1',
      unit: 'LB',
      desc: 'butter',
    })
  })
})
