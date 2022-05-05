import { GraphInterface, NodeInterface } from "../../interfaces/graph";
/**
 *
 * @param graph data
 * @param key node value to be removed
 * @returns update graph data with removed nodes and respective edges
 */
export const removeGraphNode = (
  graph: GraphInterface,
  key: string
): GraphInterface => {
  const updatedGraphNodes = graph.nodes.filter(
    (item: NodeInterface) => item.key !== key
  );
  /**
   * Remove connected edges of the given node
   */
  const edgesArray = graph.edges.filter(
    (item: [String, String, String?]) => !item.toString().includes(key)
  );

  const updateGraphData = Object.assign({}, graph, {
    edges: edgesArray,
    nodes: updatedGraphNodes,
  });
  return updateGraphData;
};
