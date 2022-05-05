export const removeGraphEdge = (graph: any, key: string): any => {
  const arr: any = graph.edges.filter(
    (item: any) => !item.toString().includes(key)
  );
  return arr;
};
