import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { GraphNode } from "./GraphNode";
import { GraphEdge } from "./GraphEdge";
import { NodeInterface } from "../interfaces/graph";

import { useRecoilState } from "recoil";
import { graphAtom } from "../recoil/atoms/graph";

export const GraphScreen = (): React.ReactElement => {
  const notify = () => toast.success("Node created successfully.");
  const [, setMousePosition] = useState([0, 0]);

  const [graph, setGraph] = useRecoilState(graphAtom);

  const mouseMove = (e: React.MouseEvent): void => {
    setMousePosition([e.clientX, e.clientY]);
  };

  const createNode = (e: React.MouseEvent): void => {
    const newObject = Object.assign({}, graph, {
      nodes: [
        ...graph.nodes,
        {
          key: `node-${graph.nodes.length + 1}`,
          value: `${graph.nodes.length + 1}`,
          xAxis: `${e.clientX}px`,
          yAxis: `${e.clientY}px`,
        },
      ],
    });

    setGraph(newObject);
    setMousePosition([e.clientX, e.clientY]);
    notify();
  };

  return (
    <div
      className="absolute h-screen w-screen cursor-pointer z-1 parent"
      onMouseMove={mouseMove}
      onClick={createNode}
    >
      <Toaster />
      {graph.nodes.length &&
        graph.nodes.map((node: NodeInterface) => (
          <React.Fragment key={node.value as React.Key}>
            <GraphNode
              left={node.xAxis}
              top={node.yAxis}
              value={node.value}
              small={false}
            />
          </React.Fragment>
        ))}
      {graph.edges.length &&
        graph.edges.map((edge: [String, String, String?], index: Number) => (
          <React.Fragment key={index as React.Key}>
            <GraphEdge to={edge[1] as string} from={edge[0] as string} />
          </React.Fragment>
        ))}
    </div>
  );
};
