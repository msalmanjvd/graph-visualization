import LineTo from "react-lineto";

type IProps = {
  from: string;
  to: string;
};
export const GraphEdge = ({ from, to }: IProps): React.ReactElement => {
  return <LineTo to={to} from={from} borderWidth={1} borderColor="#A9A9A9" />;
};
