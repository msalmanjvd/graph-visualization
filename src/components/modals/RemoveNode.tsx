import React, { Dispatch, SetStateAction, useState } from "react";
import { DropDown } from "../ui/DropDown";
import { Button } from "../ui/Button";
import { Modal } from "./../common/Modal";
import { graphAtom } from "../../recoil/atoms/graph";
import { useRecoilState } from "recoil";
import { removeGraphNode } from "../../utils/graph";
import toast from "react-hot-toast";

type IProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
};

export const RemoveNodeModal = ({
  open,
  close,
}: IProps): React.ReactElement => {
  const [graph, setGraph] = useRecoilState(graphAtom);
  const [node, setNode] = useState("");

  const handleRemoveNode = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    const result: any = removeGraphNode(graph, node);
    setGraph(result);
    toast.success("Node removed successfully");
    close(false);
  };

  return (
    <Modal title="Remove Edge" open={open} close={close}>
      <>
        <div className="flex flex-row items-stretch justify-center space-x-4 w-full">
          <DropDown
            data={graph.nodes}
            onChange={setNode}
            key="key"
            type="node"
          />
        </div>
        {node.length ? (
          <div className="mt-3 flex justify-center space-x-3">
            <Button
              text="Remove"
              variant="secondary"
              onClick={handleRemoveNode}
            />
          </div>
        ) : null}
      </>
    </Modal>
  );
};
