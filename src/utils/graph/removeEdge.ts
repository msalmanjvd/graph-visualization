import { GraphInterface } from "../../interfaces/graph";
/**
 *
 * @param graph Graph data
 * @param edge value of edge as string "node-1,node-3" to be removed
 * @returns updated edge array
 *
 */
export const removeGraphEdge = (
  graph: GraphInterface,
  key: string
): Array<[String, String, String?]> => {
  const updatedEdges = graph.edges.filter(
    (item: [String, String, String?]) => !item.toString().includes(key)
  );
  return updatedEdges;
};
