import React from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { graphAtom } from "../../recoil/atoms/graph";
import { useRecoilState } from "recoil";
import { initialGraph } from "../../recoil/atoms/graph";

export const Header = (): React.ReactElement => {
  const [graph, setGraph] = useRecoilState(graphAtom);

  const clearGraphData = (): void => {
    setGraph(initialGraph);
  };

  return (
    <div className="fixed flex items-center justify-center z-[100] text-gray-900 font-thin text-lg p-4 w-screen space-x-3 bg-violet-200">
      <ArrowRightIcon className="h-5 w-5" />{" "}
      <span>Click on Screen to Add Nodes</span>
      {graph.nodes.length ? (
        <span
          className="absolute right-4 text-xs cursor-pointer hover:underline"
          onClick={clearGraphData}
        >
          Clear Data
        </span>
      ) : null}
    </div>
  );
};

export default Header;
