const getMaxProfit = (data: [string, number][]) => {
  let minPrice = 999999999
  let maxProfit = 0
  let minPriceDay: string | null = null
  let buyDay: string | null = null
  let sellDay: string | null = null
  data.forEach(([day, price]) => {
    // 買入日: 價格低於歷史低價就買
    if (price < minPrice) {
      minPrice = price
      minPriceDay = day
    } else if (price - minPrice > maxProfit) {
      // 該筆利潤歷史新高則賣
      maxProfit = price - minPrice
      buyDay = minPriceDay
      sellDay = day
    }
  })
  return { maxProfit, buyDay, sellDay }
}

const testData: [string, number][] = [
  ['3/1/2020', 58.89284407],
  ['3/2/2020', 95.94458507],
  ['3/3/2020', 96.45912158],
  ['3/4/2020', 16.2590402],
  ['3/5/2020', 43.0972276],
  ['3/6/2020', 31.11100805],
  ['3/7/2020', 85.13620353],
  ['3/8/2020', 20.76988058],
  ['3/9/2020', 80.45273913],
  ['3/10/2020', 29.08843103],
  ['3/11/2020', 78.58577725],
  ['3/12/2020', 89.05731583],
  ['3/13/2020', 12.2478028],
  ['3/14/2020', 13.65039261],
  ['3/15/2020', 40.12335715],
  ['3/16/2020', 1.750565892],
  ['3/17/2020', 25.34774775],
  ['3/18/2020', 36.50892091],
  ['3/19/2020', 15.03065618],
  ['3/20/2020', 6.547878763],
  ['3/21/2020', 85.95000028],
  ['3/22/2020', 98.07729935],
  ['3/23/2020', 65.0573294],
  ['3/24/2020', 32.31222639],
  ['3/25/2020', 48.43739129],
  ['3/26/2020', 78.42363197],
  ['3/27/2020', 91.27971806],
  ['3/28/2020', 8.699684692],
  ['3/29/2020', 61.01249881],
  ['3/30/2020', 32.90431005],
]

const output = getMaxProfit(testData)
console.info(' XzX output:', output)
