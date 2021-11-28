import { getRadomItem } from "../random";

describe("random", () => {
  it("should get a random item", () => {
    const numbers = [1, 2, 3];
    jest.spyOn(Math, "random").mockReturnValue(0);
    const item = getRadomItem(numbers);
    expect(item).toBe(numbers[0]);
    (Math.random as jest.Mock).mockRestore();
  });
});
