import app from './index'

describe('whatever Chad wants', () => {
  it('pounds', () => {
    expect(app('1 pound butter')).toEqual({
      quantity: '1',
      unit: 'LB',
      desc: 'butter',
    })

    expect(app('29 pounds butter')).toEqual({
      quantity: '29',
      unit: 'LB',
      desc: 'butter',
    })

    expect(app('1 lb butter')).toEqual({
      quantity: '1',
      unit: 'LB',
      desc: 'butter',
    })

    expect(app('29 lbs butter')).toEqual({
      quantity: '29',
      unit: 'LB',
      desc: 'butter',
    })
  })

  it('cups', () => {
    expect(app('1 cup butter')).toEqual({
      quantity: '1',
      unit: 'Cup',
      desc: 'butter',
    })

    expect(app('333 cups buttered mayonaise peppers')).toEqual({
      quantity: '333',
      unit: 'Cup',
      desc: 'buttered mayonaise peppers',
    })
  })
})