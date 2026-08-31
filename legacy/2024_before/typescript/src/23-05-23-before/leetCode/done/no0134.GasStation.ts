namespace lc0134 {
 let gas = [3, 1, 1],
  cost = [1, 2, 2];
 console.log(`正在測試...`, canCompleteCircuit(gas, cost));
 // * * * * *  * * * * *
 function canCompleteCircuit(gas: number[], cost: number[]): number {
  const len = gas.length;
  if (gas.reduce((p, v) => p + v) < cost.reduce((p, v) => p + v)) return -1;
  for (let start = 0; start < len; start++) {
   // 加油 出發到下一站
   let remain = gas[start] - cost[start];
   let station = start + 1 >= len ? 0 : start + 1;
   // 超出地圖 回到 0 位置
   while (station !== start && remain > -1) {
    // 到站 加油 => 開到下一站
    remain = remain + gas[station] - cost[station];
    station++;
    if (station >= len) station = 0;
   }
   // 環島成功
   if (station === start) return start;
   // 跳過幾站，有幾站 就算有油 也到不了
   else start += station - start - 1;
  }
  return -1;
 }
}
