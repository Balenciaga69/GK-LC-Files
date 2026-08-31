namespace lc0042Simple {
  function trap(height: number[]): number {
    let cnt = 0;
    for (let i = 1; i < height.length - 1; i++) {
      const left = getLeft(i);
      const right = getRight(i);
      const small = Math.min(left, right);
      if (small >= height[i]) {
        cnt += small - height[i];
      }
    }
    return cnt;
    function getLeft(n: number) {
      let max = -Infinity;
      for (let i = 0; i < n; i++) max = Math.max(height[i], max);
      return max;
    }
    function getRight(n: number) {
      let max = -Infinity;
      for (let i = n + 1; i < height.length; i++)
        max = Math.max(height[i], max);
      return max;
    }
  }
  const ipt = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  //   trap(ipt);
}
namespace lc0042DP {
  function trap(height: number[]): number {
    let cnt = 0;
    const maxLeft: number[] = [height[0]];
    const maxRight: number[] = [height[height.length - 1]];
    // left dp
    for (let i = 1; i < height.length - 1; i++) {
      maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    }
    console.log(`maxLeft...`, maxLeft);
    console.log(`maxRight...`, maxRight);
    // right dp
    for (let i = height.length - 1 - 1; i > 0; i--) {
      maxRight.unshift(Math.max(maxRight[0], height[i]));
    }
    // foreach height
    for (let i = 1; i < height.length - 1; i++) {
      let small = Math.min(maxLeft[i], maxRight[i]);
      if (small >= height[i]) cnt += small - height[i];
    }
    return cnt;
  }
  const ipt = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  //   trap(ipt);
}
namespace lc0042Stack {
  function trap(height: number[]): number {
    let sum = 0;
    let i = 0;
    const stack: number[] = [];
    // for(let curr=0;curr<height.length;i++){}
    while (i < height.length) {
      while (stack.length && height[i] > height[stackPeek()]) {
        const h = height[stack.pop()!];
        if (stack.length === 0) break;
        const distance = i - stackPeek() - 1;
        const min = Math.min(height[stackPeek()], height[i]);
        sum = sum + distance * (min - h);
      }
      stack.push(i);
      i++;
    }
    function stackPeek() {
      return stack[stack.length - 1];
    }
    return sum;
  }
  const ipt = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  trap(ipt);
}
