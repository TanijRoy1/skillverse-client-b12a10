import React from "react";
import { SpinnerDotted } from "spinners-react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-30">
      <SpinnerDotted size={69} thickness={132} speed={112} color="rgba(79, 57, 172, 1)" />
    </div>
  );
};

export default Spinner;