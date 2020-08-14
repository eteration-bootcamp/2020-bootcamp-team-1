import React from "react";
import ServingSvg from "../../components/svgs/ServingSvg";
import TimerSvg from "../../components/svgs/TimerSvg";

const TimeAndServe = ({ time, servings }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <p className="m-3 text-muted d-inline-block">
        <TimerSvg /> {time}
      </p>
      <p className="m-3 text-muted d-inline-block">
        <ServingSvg /> {servings}
      </p>
    </div>
  );
};

export default TimeAndServe;
