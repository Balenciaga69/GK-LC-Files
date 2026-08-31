namespace lc0121 {
  const prices = [7, 1, 5, 3, 6, 4];
  function maxProfit(prices: number[]): number {
    let lowestVal = Infinity;
    let maxVal = 0;
    prices.forEach((todayPrice) => {
      // 遇到新低 直接 假設買入
      // 沒遇到新低 嘗試計算賣出利潤
      if (todayPrice < lowestVal) {
        lowestVal = todayPrice;
      } else {
        maxVal = Math.max(maxVal, todayPrice - lowestVal);
      }
    });
    return maxVal;
  }
  maxProfit(prices);
}
