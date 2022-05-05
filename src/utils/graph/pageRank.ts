import { nodeNeighbors } from "./neighbors";

export const pageRank = (graph: any): any => {
  const pageRanks: any = [];
  const initialPageRank = 1 / graph.nodes.length;

  [...graph.nodes].forEach((node: any) => {
    pageRanks.push({
      node: node.key,
      rank: initialPageRank,
    });
  });

  [...graph.nodes].forEach((node: any) => {
    const neighbors = nodeNeighbors(graph, node.key);
    const rootNodeIndex = pageRanks.findIndex((p: any) => p.node === node.key);
    if (neighbors.length) {
      const rootNodeRank = pageRanks[rootNodeIndex].rank;
      pageRanks[rootNodeIndex].rank = 0;

      let dividedRank = rootNodeRank / neighbors.length;

      neighbors.forEach((neighbor: any) => {
        const index = pageRanks.findIndex((p: any) => p.node === neighbor);
        pageRanks[index].rank = pageRanks[index].rank + dividedRank;
      });
    } else {
      pageRanks[rootNodeIndex].rank = initialPageRank;
    }
  });
  return pageRanks;
};
