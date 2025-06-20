/**
 * 渡された配列の中で最大の数値を返す
 * @param {Number[]} ary 
 * @returns 
 */
export function getArrayMax(ary) {
  if (!Array.isArray(ary) || ary.length === 0) {
    return undefined; // またはエラーをスロー
  }
  return Math.max(...ary);
}