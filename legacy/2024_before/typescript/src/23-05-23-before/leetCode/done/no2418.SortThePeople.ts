namespace lc2418 {
  interface Man {
    name: string;
    height: number;
  }
  function sortPeople(names: string[], heights: number[]): string[] {
    const data: Man[] = [];
    for (let i = 0; i < names.length; i++) {
      data.push({ name: names[i], height: heights[i] });
    }
    data.sort((a, b) => b.height - a.height);
    return data.map((e) => e.name);
  }
  const names = ["Mary", "John", "Emma"],
    heights = [180, 165, 170];

  let re = sortPeople(names, heights);
  console.log(`正在測試...`, re);
}
