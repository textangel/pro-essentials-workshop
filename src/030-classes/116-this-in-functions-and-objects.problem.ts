import { it, expect } from "vitest";

it("Should add the numbers together", () => {
  const calculator = {
    x: 0,
    y: 0,
    setValues(x: number, y: number) {
      this.x = x;
      this.y = y;
    },
    add() {
      return this.x + this.y;
    },
  };

  calculator.setValues(1, 2);

  expect(calculator.add()).toEqual(3);
});
