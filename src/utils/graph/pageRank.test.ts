import { pageRank } from "./pageRank";

import { graphAssertion } from "../../jest/assertions/graph";

describe("Page rank calculation", () => {
  test("It should return page rank of each node in the graph!", () => {
    expect(pageRank(graphAssertion)).toEqual([
      { node: "node-1", rank: 0 },
      { node: "node-2", rank: 0 },
      { node: "node-3", rank: 0 },
      { node: "node-4", rank: 0 },
      { node: "node-5", rank: 0.2 },
    ]);
  });
});
