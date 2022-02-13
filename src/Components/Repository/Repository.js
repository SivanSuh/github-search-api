import React, { useState } from "react";
import "./Repository.css";
const Repository = ({ deger }) => {
  return (
    <div className="repos">
      <h2>{deger}</h2>
    </div>
  );
};

export default Repository;
