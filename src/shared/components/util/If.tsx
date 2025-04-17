import React from "react";

type IfProps = {
  children: React.ReactNode;
  cond: boolean;
};

function If({ cond, children }: IfProps) {
  return cond ? <>{children}</> : <></>;
}

export default If;
