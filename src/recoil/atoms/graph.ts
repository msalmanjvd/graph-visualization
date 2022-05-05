import { atom } from "recoil";
import { GraphInterface } from "../../interfaces/graph";

export const initialGraph: GraphInterface = {
  undirected: true,
  nodes: [],
  edges: [],
};

export const graphAtom = atom({
  key: "graph",
  default: initialGraph,
});
