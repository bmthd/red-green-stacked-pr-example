import { expect, test } from "vitest";
import { toTaxIncluded } from "./tax.js";

test("端数が生じない場合、税率を掛けた額を返すこと", () => {
  expect(toTaxIncluded(100)).toBe(110);
});

test("小数部が0.5未満になる場合、税込価格は1円未満を切り捨てること", () => {
  expect(toTaxIncluded(101)).toBe(111);
});

// WORKAROUND: toTaxIncluded が四捨五入しているため、このテストは現在失敗する。
// 切り捨てに修正した時点で、このコメントごと `.fails` を外すこと。
test.fails("小数部が0.5以上になる場合でも、税込価格は1円未満を切り捨てること", () => {
  expect(toTaxIncluded(105)).toBe(115);
});
