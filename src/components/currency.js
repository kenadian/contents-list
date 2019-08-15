export default function Currency({ value }) {
  //Add thousand separators and currency symbol
  return (
    "$" +
    value.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  );
}
