import React from "react";

export default function Currency({ value }) {
  //Convert to whole dollars
  const newNumber = Math.trunc(value);
  //Add thousand separators and currency symbol
  return (
    "$" +
    value.toLocaleString(navigator.language, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
  );
}
