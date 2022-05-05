import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Button } from "../ui/Button";
import { AddEdgeModal } from "../modals/AddEdge";
import { FindNeighborsModal } from "../modals/Neighbors";
import { RemoveNodeModal } from "../modals/RemoveNode";
import { RemoveEdgeModal } from "../modals/RemoveEdge";
import { PageRankModal } from "../modals/PageRank";
import { graphAtom } from "../../recoil/atoms";

import toast, { Toaster } from "react-hot-toast";

import {
  PlusIcon,
  MinusIcon,
  SearchIcon,
  HashtagIcon,
} from "@heroicons/react/outline";

export const Footer = (): React.ReactElement => {
  const [edgeModal, setEdgeModal] = useState(false);
  const [removeEdgeModal, setRemoveEdgeModal] = useState(false);
  const [removeNodeModal, setRemoveNodeModal] = useState(false);
  const [pageRankModal, setPageRankModal] = useState(false);
  const graphData = useRecoilValue(graphAtom);
  const [neighborModal, setNeighborModal] = useState(false);

  const notify = (message: any) => toast.error(message);

  const iconClass = "h-4 w-4";

  return (
    <>
      {graphData.nodes.length && (
        <>
          <Toaster />
          <div className="fixed bottom-0 z-[10] w-screen flex flex-row space-x-3 justify-center items-center bg-violet-200 py-3">
            <Button
              text="Add Edge"
              onClick={() => {
                if (graphData.nodes.length < 2) {
                  notify("Minimum 2 nodes required!");
                } else {
                  setEdgeModal(true);
                }
              }}
              icon={<PlusIcon className={iconClass} />}
            />
            <Button
              text="Remove Node"
              onClick={() => {
                setRemoveNodeModal(true);
              }}
              icon={<MinusIcon className={iconClass} />}
            />
            <Button
              text="Remove Edge"
              onClick={() => {
                if (!graphData.edges.length) {
                  notify("There are no edges to delete!");
                } else {
                  setRemoveEdgeModal(true);
                }
              }}
              icon={<MinusIcon className={iconClass} />}
            />
            <Button
              text="Find Neighbors"
              onClick={() => {
                setNeighborModal(true);
              }}
              icon={<SearchIcon className={iconClass} />}
            />
            <Button
              text="PageRank"
              onClick={(e: React.BaseSyntheticEvent) => {
                e.stopPropagation();
                setPageRankModal(true);
              }}
              icon={<HashtagIcon className={iconClass} />}
            />
          </div>
          {removeNodeModal && (
            <RemoveNodeModal
              open={removeNodeModal}
              close={setRemoveNodeModal}
            />
          )}
          {removeEdgeModal && (
            <RemoveEdgeModal
              open={removeEdgeModal}
              close={setRemoveEdgeModal}
            />
          )}
          {neighborModal && (
            <FindNeighborsModal open={neighborModal} close={setNeighborModal} />
          )}
          {edgeModal && <AddEdgeModal open={edgeModal} close={setEdgeModal} />}
          {pageRankModal && (
            <PageRankModal open={pageRankModal} close={setPageRankModal} />
          )}
        </>
      )}
    </>
  );
};
