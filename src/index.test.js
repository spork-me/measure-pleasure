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

  it('teaspoons', () => {
    expect(app('1 tsp butter')).toEqual({
      quantity: '1',
      unit: 'TSP',
      desc: 'butter',
    })

    expect(app('half teaspoon butter')).toEqual({
      quantity: 'half',
      unit: 'TSP',
      desc: 'butter',
    })

    expect(app('333 teaspoons buttered mayonaise peppers')).toEqual({
      quantity: '333',
      unit: 'TSP',
      desc: 'buttered mayonaise peppers',
    })
  })

  it('can', () => {
    expect(app('1/3 can butter')).toEqual({
      quantity: '1/3',
      unit: 'Can',
      desc: 'butter',
    })

    expect(app('993 CaNs butter')).toEqual({
      quantity: '993',
      unit: 'Can',
      desc: 'butter',
    })
  })

  it('pinch', () => {
    expect(app('1/3 pinch butter')).toEqual({
      quantity: '1/3',
      unit: 'Pinch',
      desc: 'butter',
    })

    expect(app('seventeen pinches butter')).toEqual({
      quantity: 'seventeen',
      unit: 'Pinch',
      desc: 'butter',
    })
  })
})
