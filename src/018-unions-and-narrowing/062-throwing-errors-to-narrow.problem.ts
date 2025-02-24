import { Equal, Expect } from "@total-typescript/helpers";

const appElement = document.getElementById("app");

// How do I ensure that appElement is defined?

if (!appElement) {
  throw new Error("appElement is not defined");
}

type Test = Expect<Equal<typeof appElement, HTMLElement>>;
