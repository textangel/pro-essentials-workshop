type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  type: ButtonType;
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);
