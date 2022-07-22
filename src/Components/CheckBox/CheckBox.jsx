import React from "react";
import "./CheckBox.css";

const CheckBox = () => {
  return (
    <div className="checkbox__container-outer">
      <h1 className="checkbox-heading">Cost</h1>
      <div className="checkbox__container-inner">
        <label class="form-control">
          <input type="checkbox" name="checkbox" />
          Rs 1500-4000
        </label>
        <label class="form-control">
          <input type="checkbox" name="checkbox" />
          Rs 4001-7000
        </label>
        <label class="form-control">
          <input type="checkbox" name="checkbox" />
          Rs 7001+
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
