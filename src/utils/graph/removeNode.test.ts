import { removeGraphNode } from "./removeNode";
import { graphAssertion } from "../../jest/assertions/graph";

describe("Remove node function", () => {
  test("It should remove node from graph and return update graph!", () => {
    const nodeIndex = 0;
    const nodeValue = String(graphAssertion.nodes[nodeIndex]["key"]);
    const result = removeGraphNode(graphAssertion, String(nodeValue));
    const nodeCount = result.nodes.filter((item) => item.value === nodeValue);
    expect(nodeCount.length).toBe(0);
  });
});
