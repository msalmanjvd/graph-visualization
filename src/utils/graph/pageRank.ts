import { nodeNeighbors } from "./neighbors";
import { GraphInterface, NodeInterface } from "../../interfaces/graph";
/**
 *
 * @param graph Graph data
 * @returns page rank of each node in the graph
 */

type RankType = {
  node: String;
  rank: Number;
};

export const pageRank = (graph: GraphInterface): Array<RankType> => {
  const pageRanks: any = [];
  const initialPageRank = 1 / graph.nodes.length;

  /**
   * Initialize page ranks for each node
   */
  [...graph.nodes].forEach((node: NodeInterface) => {
    pageRanks.push({
      node: node.key,
      rank: initialPageRank,
    });
  });

  [...graph.nodes].forEach((node: NodeInterface) => {
    /**
     * check neighbors of given node
     */
    const neighbors = nodeNeighbors(graph, node.key as string);
    /**
     * Find index of node in pageRanks array and update its rank
     */
    const rootNodeIndex = pageRanks.findIndex(
      (rank: RankType) => rank.node === node.key
    );

    if (neighbors.length) {
      const rootNodeRank = pageRanks[rootNodeIndex].rank;
      pageRanks[rootNodeIndex].rank = 0;

      let dividedRank = rootNodeRank / neighbors.length;

      neighbors.forEach((neighbor: String) => {
        const index = pageRanks.findIndex(
          (rank: RankType) => rank.node === neighbor
        );
        pageRanks[index].rank = pageRanks[index].rank + dividedRank;
      });
    } else {
      pageRanks[rootNodeIndex].rank = initialPageRank;
    }
  });
  return pageRanks;
};
