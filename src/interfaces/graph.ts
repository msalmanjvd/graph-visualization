export interface NodeInterface {
  key: String;
  value: String;
  xAxis: String;
  yAxis: String;
}

export interface GraphInterface {
  undirected?: boolean;
  nodes: Array<NodeInterface>;
  edges: Array<[String, String, String?]>;
}
