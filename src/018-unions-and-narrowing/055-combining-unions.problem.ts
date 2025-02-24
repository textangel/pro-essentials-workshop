import { Equal, Expect } from "@total-typescript/helpers";

type ErrorHttpCode = "400" | "401" | "404" | "500";
type SuccessHttpCode = "200" | "201" | "204";
type HttpCode = ErrorHttpCode | SuccessHttpCode;

const handleErrorCase = (code: HttpCode) => {
  // An imaginary function where we only handle the errors

  type test = Expect<Equal<typeof code, ErrorHttpCode>>;
};

const handleSuccessCase = (code: HttpCode) => {
  // An imaginary function where we only handle the success cases

  type test = Expect<Equal<typeof code, SuccessHttpCode>>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary function where we handle all the cases

  type test = Expect<Equal<typeof code, HttpCode>>;
};
