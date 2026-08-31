namespace lc0846 {
  // 牌 從小排到大
  // 湊齊一組就打掉
  // 無腦往前丟
  function isNStraightHand(hand: number[], groupSize: number): boolean {
    if (hand.length % groupSize != 0) return false;
    hand.sort((a, b) => a - b);
    const map = new Map<number, number>();
    hand.forEach((key) => map.set(key, (map.get(key) || 0) + 1));
    for (const H of hand) {
      if (!map.has(H)) continue;
      for (let i = 0; i < groupSize; i++) {
        if (!map.has(H + i)) {
          return false;
        } else {
          map.set(H + i, map.get(H + i)! - 1);
          if (map.get(H + i) === 0) map.delete(H + i);
        }
      }
    }
    return true;
  }
  isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3);
}
