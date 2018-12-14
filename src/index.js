const LB = 'LB'
const Cup = 'Cup'
const TSP = 'TSP'
const Can = 'Can'
const Pinch = 'Pinch'
const OZ = 'OZ'

const units = {
  pound: LB,
  pounds: LB,
  lb: LB,
  lbs: LB,
  cup: Cup,
  cups: Cup,
  tsp: TSP,
  teaspoon: TSP,
  teaspoons: TSP,
  can: Can,
  cans: Can,
  pinch: Pinch,
  pinches: Pinch,
  oz: OZ,
  ounce: OZ,
  ounces: OZ,
}

const getQuantity = (x) => {
  return x[1]
}

const getUnit = (x) => {
  return units[x[2].toLowerCase()]
}

const getDesc = (x) => {
  return x[3].replace(/of /i, '')
}

const unitsClause = Object.keys(units).join('|')
const r = new RegExp(`(.+) +(${unitsClause}) +(.+)`, 'gi')

export default (input) => {
  r.lastIndex = 0
  const match = r.exec(input)
  if (match) {
    return {
      quantity: getQuantity(match),
      unit: getUnit(match),
      desc: getDesc(match),
    }
  }
}
