import React, { Fragment, useState } from "react";
import { Selector } from "./Selector/";
import { OptionType } from "./Selector";

const options: OptionType[] = [
  { label: "日", value: 1 },
  { label: "月", value: 2 },
  { label: "火", value: 3 },
  { label: "水", value: 4 },
  { label: "木", value: 5 },
  { label: "金", value: 6 },
  { label: "土", value: 7 },
];
export const DivBlur = () => {
  const [value, setValue] = useState(options[0]);
  return (
    <Fragment>
      <Selector options={options} onChange={setValue} value={value} />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
        <div key={n} style={{ height: "100px", width: "100px", background: "#c1c1c1", margin: "12px" }}></div>
      ))}
    </Fragment>
  );
};
