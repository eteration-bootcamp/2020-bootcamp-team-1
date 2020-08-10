import React from "react";
import ServingSvg from "../../components/svgs/ServingSvg";
import TimerSvg from "../../components/svgs/TimerSvg";

const TimeAndServe = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="m-3 text-muted d-inline-block">
        <TimerSvg /> 15 Minutes
      </p>
      <p className="m-3 text-muted d-inline-block">
        <ServingSvg /> 2 Servings
      </p>
    </div>
  );
};

export default TimeAndServe;
