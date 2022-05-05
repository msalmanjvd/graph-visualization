import { nodeNeighbors } from "./neighbors";
import { graphAssertion } from "../../jest/assertions/graph";

describe("Neighbors function", () => {
  test("It should return an array of neighbor nodes of a given node!", () => {
    expect(nodeNeighbors(graphAssertion, "node-1")).toEqual([
      "node-2",
      "node-3",
    ]);
    expect(nodeNeighbors(graphAssertion, "node-2")).toEqual(["node-4"]);
    expect(nodeNeighbors(graphAssertion, "node-3")).toEqual(["node-4"]);
    expect(nodeNeighbors(graphAssertion, "node-4")).toEqual(["node-5"]);
  });
});
