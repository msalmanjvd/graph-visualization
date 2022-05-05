export const removeGraphNode = (graph: any, key: string): any => {
  const arr: any = graph.nodes.filter((item: any) => item.key !== key);
  const edgesArray: any = graph.edges.filter(
    (item: any) => !item.toString().includes(key)
  );

  const newObject = Object.assign({}, graph, {
    edges: edgesArray,
    nodes: arr,
  });
  return newObject;
};
