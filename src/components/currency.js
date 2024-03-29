/**
 * Formats a number passed as {value:number}
 * as a string and adds a currency symbol
 * @export
 * @param {value:Number, [currencySymbol:String | default "$"]} { value, currencySymbol = "$" }
 * @returns String
 */
const Currency = ({ value, currencySymbol = "$" }) => {
  //Add thousand separators and currency symbol
  return (
    currencySymbol +
    value.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  );
};
export default Currency;
