import {
  toUpperCase,
  getStringInfo,
} from "../src/Examples/EP02_Basics of testing with Jest/Utils";

describe("Utils test suite", () => {
  // 兩種寫法 it, test
  // it("should return uppercase", () => {
  test("should return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected); // 定義期望的測試結果
  });

  // only 僅執行
  it.only("should return init for valid string", () => {
    const actual = getStringInfo("My-String");

    expect(actual.lowerCase).toBe("my-string"); // 比對值以及記憶體位置相同
    expect(actual.extraInfo).toEqual({}); // 比對值相同，主要用來比對 Object or Array

    expect(actual.characters.length).toBe(9);
    expect(actual.characters).toHaveLength(9); // 比對給定值的長度與期望值是否相同
    expect(actual.characters).toEqual([
      "M",
      "y",
      "-",
      "S",
      "t",
      "r",
      "i",
      "n",
      "g",
    ]);
    expect(actual.characters).toEqual(
      expect.arrayContaining(["t", "r", "i", "n", "g"]) // 用於測試陣列是否包含某些特定的元素
    );
    expect(actual.characters).toContain("M"); // 用於測試陣列、字串、Map、Set 等類型的值是否包含某個特定的元素
    expect(actual.characters).toContain<string>("y");

    expect(actual.extraInfo).not.toBe(undefined); // 判斷不是undefined
    expect(actual.extraInfo).not.toBeUndefined(); // 判斷不是undefined
    expect(actual.extraInfo).toBeUndefined(); // 判斷是undefined
    expect(actual.extraInfo).toBeTruthy(); // 判斷是否為真
  });
});
