import { removeGraphEdge } from "./removeEdge";
import { graphAssertion } from "../../jest/assertions/graph";

describe("Remove edge function", () => {
  test("It should remove edge from graph and return update graph edges!", () => {
    const edgeIndex = 0;
    const edgeValue = graphAssertion.edges[edgeIndex];
    const result = removeGraphEdge(graphAssertion, String(edgeValue));
    expect(result.indexOf(edgeValue)).toBe(-1);
  });
});
