import { Modal } from "./../common/Modal";
import { graphAtom } from "../../recoil/atoms/graph";
import { useRecoilValue } from "recoil";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { pageRank } from "../../utils/graph";

type IProps = {
  open: boolean;
  close: Dispatch<SetStateAction<boolean>>;
};

type RankType = {
  node: String;
  rank: Number;
};

export const PageRankModal = ({ open, close }: IProps): React.ReactElement => {
  const graphData = useRecoilValue(graphAtom);
  const [pageRanksResult, setPageRanksResult] = useState(Array<RankType>());

  useEffect(() => {
    const result = pageRank(graphData);
    setPageRanksResult(result);
  }, [graphData]);

  return (
    <Modal title="Page Ranks For Nodes" open={open} close={close}>
      <>
        {pageRanksResult.length ? (
          <div className="flex flex-col overflow-scroll max-h-[100px] w-full">
            {pageRanksResult.map((rank: any, index) => (
              <div className=" space-x-1" key={index}>
                <span className="font-bold">{rank.node} </span>
                <span className="font-thin">rank is</span>{" "}
                <span className="font-bold">{rank.rank.toFixed(4)}</span>
              </div>
            ))}
          </div>
        ) : null}
      </>
    </Modal>
  );
};
