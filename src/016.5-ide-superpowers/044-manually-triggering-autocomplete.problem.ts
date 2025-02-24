type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  foo: "hello",
  bar: 12,
  baz: true,
});

document.addEventListener(
  "click",
  (event) => {
    console.log(event);
  },
);
