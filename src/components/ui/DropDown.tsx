export const DropDown = ({
  data,
  onChange,
  type = "node",
}: any): React.ReactElement => {
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
          data.map((record: any, index: any) => (
            <option value={type === "edge" ? record : record.key} key={index}>
              {type === "edge" ? record[0] + " ◼️ " + record[1] : record.key}
            </option>
          ))}
      </select>
    </>
  );
};
