namespace lc2469 {
  function convertTemperature(c: number): number[] {
    let k = 0;
    let f = 0;
    k = c + 273.15;
    f = c * 1.8 + 32;
    k = Number(k.toFixed(5));
    f = Number(f.toFixed(5));
    return [k, f];
  }
  const celsius = 36.565645;
  convertTemperature(celsius);
}
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
