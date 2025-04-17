import React from "react";

type LoopProps = {
  children: React.ReactNode;
  loops: number;
};

function Loop(props: LoopProps) {
  let { loops = 0 } = props;
  loops = loops < 0 ? 0 : loops;
  let children: React.ReactNode[] = [];
  for (let counter = 0; counter < loops; counter++) {
    children.push(props.children);
  }
  return <>{children}</>;
}

export default Loop;
