namespace lc0207 {
  function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const nextCourse = new Map<number, number[]>();
    const record: number[][] = [];
    let isPass = true;
    // * * * * * INIT * * * * *
    prerequisites.forEach(([nextOne, id]) => {
      const target = nextCourse.get(id) || null;
      nextCourse.set(id, target ? [...target, nextOne] : [nextOne]);
    });
    // * * * * *  * * * * *
    nextCourse.forEach((group, id) => {
      func(id, new Set<number>());
    });
    return isPass;
    // * * * * *  * * * * *
    function func(id: number, nodes: Set<number>) {
      if (!isPass) return;
      if (nodes.has(id)) {
        isPass = false;
        return;
      }
      nodes.add(id);
      nextCourse.get(id) &&
        nextCourse.get(id)!.forEach((cid) => {
          const isFind =
            record.findIndex(([a, b]) => a === cid && b == id) > -1;
          if (isFind) return;
          record.push([cid, id]);
          func(cid, nodes);
        });
      nodes.delete(id);
    }
  }
  const numCourses = 2,
    prerequisites = [[1, 0]];
  canFinish(numCourses, prerequisites);
}
