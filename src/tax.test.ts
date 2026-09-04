import { expect, test } from "vitest";
import { toTaxIncluded } from "./tax.js";

test("端数が生じない場合、税率を掛けた額を返すこと", () => {
  expect(toTaxIncluded(100)).toBe(110);
});

test("小数部が0.5未満になる場合、税込価格は1円未満を切り捨てること", () => {
  expect(toTaxIncluded(101)).toBe(111);
});
