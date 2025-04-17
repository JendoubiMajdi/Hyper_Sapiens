import React from "react";

class Foo {
  #bar = "ES13 works !";
  get_bar(): string {
    return this.#bar;
  }
}

function TestES13() {
  return <div>{new Foo().get_bar()}</div>;
}

export default TestES13;
