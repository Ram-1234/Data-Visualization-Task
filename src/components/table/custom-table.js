import React from "react";
import "./style.css";

const CustomTable = ({ title, allclass, meanList, medianList, modeList }) => {
  return (
    <table className="table_container">
      <tbody className="table_body">
        <tr className="table_row">
          <th>Measure</th>
          {allclass &&
            allclass?.map((item) => {
              return <th key={item}>Alcohol {item}</th>;
            })}
        </tr>
        <tr>
          <th>{title} Mean</th>
          {meanList &&
            meanList?.map((item) => {
              return <td key={item.Alcohol}>{item?.mean}</td>;
            })}
        </tr>
        <tr>
          <th>{title} Median</th>
          {medianList &&
            medianList?.map((item) => {
              return <td key={item.Alcohol}>{item.median}</td>;
            })}
        </tr>
        <tr>
          <th>{title} Mode</th>
          {modeList &&
            modeList.map((item) => {
              return <td key={item.Alcohol}>{item?.mode}</td>;
            })}
        </tr>
      </tbody>
    </table>
  );
};

export default CustomTable;
