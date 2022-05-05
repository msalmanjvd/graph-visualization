import { removeGraphEdge } from "./removeEdge";
import { graphAssertion } from "../../jest/assertions/graph";

describe("Remove edge function", () => {
  test("It should remove edge from graph and return update graph edges!", () => {
    const edgeIndex = 0;
    const result = removeGraphEdge(
      graphAssertion,
      graphAssertion.edges[edgeIndex].toString()
    );
    expect(result.indexOf(edgeIndex)).toEqual(-1);
  });
});
