export const nodeNeighbors = (graph: any, key: string): String[] => {
  let acc: String[] = [];
  graph.edges.forEach((a: any, index: any): void => {
    if (a[0] === key) acc.push(a[1]);
  });
  return Array.from(new Set(acc));
};
