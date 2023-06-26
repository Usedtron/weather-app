export function fahrenheitToCelcius(tempF) {
  return Math.round(((tempF - 32) * 5) / 9);
}
export function milesToKilometers(miles) {
  return (1.60934 * miles).toFixed();
}
