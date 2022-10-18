export const getCountry = async (signal: AbortSignal) => {
  const url = "https://restcountries.com/v3.1/name/Algeria";
  const response = await fetch(url, { signal });
  return await response.json();
};

export function formatNumber(num: number | undefined) {
  if (!num) return;
  var first = String(num).split(",");
  var digits = first[0].split("").reverse();
  var new_digits = [];
  for (var i = 0; i < digits.length; i++) {
    if ((i + 1) % 3 === 0) {
      new_digits.push(digits[i]);
      new_digits.push(".");
    } else {
      new_digits.push(digits[i]);
    }
  }
  var new_num = new_digits.reverse().join("");
  return new_num;
}
