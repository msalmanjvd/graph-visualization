import { removeGraphNode } from "./removeNode";
import { graphAssertion } from "../../jest/assertions/graph";

describe("Remove node function", () => {
  test("It should remove node from graph and return update graph!", () => {
    const nodeIndex = 0;
    const result = removeGraphNode(
      graphAssertion,
      String(graphAssertion.nodes[nodeIndex]["key"])
    );
    expect(result.nodes.indexOf(nodeIndex)).toEqual(-1);
  });
});
