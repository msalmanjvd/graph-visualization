import React from "react";

type IProps = {
  left: String;
  top: String;
  value: String;
  small: Boolean;
  position?: String;
};
export const GraphNode = ({
  left = "auto",
  top = "auto",
  value,
  small,
  position = "absolute",
}: IProps): React.ReactElement => {
  return React.createElement(
    "div",
    {
      style: {
        position: position === "none" ? "" : "absolute",
        height: "50px",
        width: "50px",
        left: left,
        top: top,
        borderRadius: "100%",
        zIndex: "100",
        fontSize: small && "12px",
      },
      id: `node-${value}`,

      className: `${
        "node-" + String(value)
      } text-white flex items-center justify-center bg-gray-900 drop-shadow-2xl shadow-amber-700`,
      "data-position": `${left}${top} }`,
    },

    value
  );
};
