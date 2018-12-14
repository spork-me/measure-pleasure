const getQuantity = (x) => {
  return '1'
}

const getUnit = (x) => {
  return 'LB'
}

const getDesc = (x) => {
  return 'butter'
}

export default (input) => {
  const r = (/(.+) +(pound) +(.+)/)
  const match = r.exec(input)
  if (match) {
    return {
      quantity: getQuantity(match),
      unit: getUnit(match),
      desc: getDesc(match),
    }
  }
}
