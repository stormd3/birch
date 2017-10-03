import React from "react";
import { wrappedExamples } from "./example_settings/example_list";
import { Link } from "react-router-dom";

const onlyThreeWrappedExamples = wrappedExamples
  .sort(() => Math.random() - Math.random())
  .filter((d, i) => i < 3);

const intro = (
  <div>
    {onlyThreeWrappedExamples}
    <div style={{ textAlign: "center" }}>
      <Link to="examples">More Examples</Link>
    </div>
  </div>
);

export default intro;
