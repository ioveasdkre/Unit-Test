import { toUpperCase } from "../src/Examples/EP02_Basics of testing with Jest/Utils";

describe("Utils test suite", () => {
  test("should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC"); // 定義期望的測試結果
  });
});
