import { GraphInterface } from "../../interfaces/graph";
/**
 *
 * @param graph Graph data
 * @param key node key
 * @returns unique neighbors of the given node
 */

export const nodeNeighbors = (graph: GraphInterface, key: string): String[] => {
  let nodeNeighbors: String[] = [];
  graph.edges.forEach((edge: any, index: any): void => {
    if (edge[0] === key) nodeNeighbors.push(edge[1]);
  });
  return Array.from(new Set(nodeNeighbors));
};
