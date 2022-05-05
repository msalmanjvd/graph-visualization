import { GraphInterface } from "../../interfaces/graph";

export const graphAssertion: GraphInterface = {
  undirected: true,
  nodes: [
    { key: "node-1", value: "node-1", xAxis: "0", yAxis: "0" },
    { key: "node-2", value: "node-2", xAxis: "0", yAxis: "0" },
    { key: "node-3", value: "node-3", xAxis: "0", yAxis: "0" },
    { key: "node-4", value: "node-4", xAxis: "0", yAxis: "0" },
    { key: "node-5", value: "node-5", xAxis: "0", yAxis: "0" },
  ],
  edges: [
    ["node-1", "node-2"],
    ["node-1", "node-3"],
    ["node-2", "node-4"],
    ["node-3", "node-4"],
    ["node-4", "node-5"],
  ],
};
