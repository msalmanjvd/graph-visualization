import React, { Dispatch, SetStateAction } from "react";
import { DropDown } from "../ui/DropDown";
import { Button } from "../ui/Button";
import { Modal } from "./../common/Modal";
import { graphAtom } from "../../recoil/atoms/graph";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { GraphInterface } from "../../interfaces/graph";
import toast from "react-hot-toast";

type IProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
  data: GraphInterface;
};

export const AddEdgeModal = ({
  open,
  close,
  data,
}: IProps): React.ReactElement => {
  const [graph, setGraph] = useRecoilState(graphAtom);
  const [lineFrom, setLineFrom] = useState(data.nodes[0].key);
  const [lineTo, setLineTo] = useState(data.nodes[1].key);

  const addNewEdge = (e: React.BaseSyntheticEvent) => {
    e.stopPropagation();
    if (lineFrom !== lineTo) {
      const newObject = Object.assign({}, graph, {
        edges: [...graph.edges, [lineFrom, lineTo, 0]],
      });
      toast.success("Edge added successfully");
      setGraph(newObject);
    }
  };

  return (
    <Modal title="Add New Edge" open={open} close={close}>
      <>
        <div className="flex flex-row items-stretch justify-center space-x-4 w-full p-3">
          <div className="flex items-center space-x-3">
            <span>From</span>{" "}
            <DropDown data={data.nodes} onChange={setLineFrom} />
          </div>
          <div className="flex items-center space-x-3">
            <span>To</span> <DropDown data={data.nodes} onChange={setLineTo} />
          </div>
        </div>
        {lineFrom.length && lineTo.length ? (
          <div className="mt-3 flex justify-center">
            <Button text="Add Edge" variant="secondary" onClick={addNewEdge} />
          </div>
        ) : null}
      </>
    </Modal>
  );
};
