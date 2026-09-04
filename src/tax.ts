const TAX_RATE = 1.1;

/**
 * 税抜価格から税込価格を求める。
 * 仕様上、1円未満は切り捨てる。
 */
export const toTaxIncluded = (price: number): number =>
  Math.round(price * TAX_RATE);
