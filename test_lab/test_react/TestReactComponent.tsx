import React, { useState } from "react";
//import HelloWorld from "./components/HelloWorld";
//import TestES13 from "./components/TestES13";
import If from "../../src/shared/components/util/If";
//import Repeat from "../../src/shared/components/util/Repeat";

function TestReactComponent() {
  const [cond, setCond] = useState(true);
  const toggle = () => {
    setCond(!cond);
  };
  return (
    <>
      <span>
        cond =
        <If cond={cond}>
          <b style={{ color: "green" }}>{" " + String(cond)}</b>
        </If>
        <If cond={!cond}>
          <b style={{ color: "red" }}>{" " + String(cond)}</b>
        </If>
      </span>
      <br />
      <button onClick={toggle}>set to {String(!cond)}</button>
    </>
  );
}

export default TestReactComponent;
