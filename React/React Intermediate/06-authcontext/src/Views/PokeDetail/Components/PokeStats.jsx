import React from "react";

const PokeStats = ({ stats }) => {
  return (
    <>
      {stats?.map(({ stat, base_stat }, index) => (
        <div key={index} style={{ display: "flex" }}>
          <p>{stat.name}</p>
          <p>{` : ${base_stat} %`}</p>
        </div>
      ))}
    </>
  );
};

export default PokeStats;
