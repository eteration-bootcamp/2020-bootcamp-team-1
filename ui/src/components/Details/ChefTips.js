import React from "react";

const ChefTips = ({ tips }) => {
  return (
    <div className="mt-3 mb-5">
      <h4>Chef's Tips</h4>
      <p className="ml-2 mt-3">{tips}</p>
    </div>
  );
};

export default ChefTips;
