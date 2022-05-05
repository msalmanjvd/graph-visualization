import React, { Dispatch, SetStateAction } from "react";
import { NodeInterface } from "../../interfaces/graph";

type IProps = {
  data: Array<NodeInterface> | Array<[String, String, String?]>;
  onChange:
    | Dispatch<SetStateAction<boolean>>
    | Dispatch<SetStateAction<String>>
    | Dispatch<SetStateAction<string>>;
  type?: "edge" | "node";
};

export const DropDown = ({
  data,
  onChange,
  type = "node",
}: IProps): React.ReactElement => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };
  return (
    <>
      <select
        className="leading-8 bg-gray-200 rounded py-2 px-4 w-[190px]"
        onChange={handleChange}
      >
        {data.length &&
          data.map((record: any, index: Number) => (
            <option
              value={type === "edge" ? record : record.key}
              key={index as React.Key}
            >
              {type === "edge" ? record[0] + " ◼️ " + record[1] : record.key}
            </option>
          ))}
      </select>
    </>
  );
};
