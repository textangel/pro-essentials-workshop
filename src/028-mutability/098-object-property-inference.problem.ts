type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  type: ButtonType;
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes: ButtonAttributes = {
  type: "button",
};

modifyButton(buttonAttributes);

// Example 2

const modifyButtons = (attributes: ButtonAttributes[]) => {};

const buttonsToChange: ButtonAttributes[] = [
  {
    type: "button",
  },
  {
    type: "submit",
  },
];

modifyButtons(buttonsToChange);
