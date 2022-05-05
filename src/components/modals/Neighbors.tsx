import { DropDown } from "../ui/DropDown";
import { Button } from "../ui/Button";
import { Modal } from "./../common/Modal";
import { graphAtom } from "../../recoil/atoms/graph";
import { useRecoilValue } from "recoil";
import React, { Dispatch, SetStateAction, useState } from "react";
import { GraphInterface, NodeInterface } from "../../interfaces/graph";
import { nodeNeighbors } from "../../utils/graph";
import { GraphNode } from "../GraphNode";

type IProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  data: GraphInterface;
};

export const FindNeighborsModal = ({
  open,
  close,
  data,
}: IProps): React.ReactElement => {
  const graph = useRecoilValue(graphAtom);
  const [node, setNode] = useState("");
  const [neighbors, setNeighbors] = useState([]);

  const findNodeNeighbors = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    const result: any = nodeNeighbors(graph, node);
    setNeighbors(result);
  };

  return (
    <Modal
      title={neighbors.length ? `Neighbors of ${node}` : "Find Neighbors"}
      open={open}
      close={close}
    >
      <>
        {neighbors.length ? (
          <>
            <div className="flex flex-row space-x-3">
              {neighbors.map((node: NodeInterface, index: Number) => (
                <React.Fragment key={index as React.Key}>
                  <GraphNode
                    value={node.value}
                    small={true}
                    position="none"
                    left={node.xAxis}
                    top={node.yAxis}
                  />
                </React.Fragment>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-row items-stretch justify-center space-x-4 w-full">
              <DropDown data={data.nodes} onChange={setNode} key="key" />
            </div>
            {node.length ? (
              <div className="mt-3 flex justify-center">
                <Button
                  text="Find Neighbors"
                  variant="secondary"
                  onClick={findNodeNeighbors}
                />
              </div>
            ) : null}
          </>
        )}
      </>
    </Modal>
  );
};
