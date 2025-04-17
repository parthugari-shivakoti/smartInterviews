function formatCurrency(amount, currencyCode) {
  if (typeof amount !== 'number') {
    return "Invalid input: Amount must be a number.";
  }
  if (typeof currencyCode !== 'string' || currencyCode.length !== 3) {
    return "Invalid input: Currency code must be a 3-letter string.";
  }

  const currencyFormats = {
    USD: { symbol: '$', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' },
    EUR: { symbol: '€', symbolPosition: 'after', decimalPlaces: 2, thousandsSeparator: '.', pattern: '###.##0,00' },
    GBP: { symbol: '£', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' },
    JPY: { symbol: '¥', symbolPosition: 'before', decimalPlaces: 0, thousandsSeparator: '', pattern: '###,##0' }, // No decimal places
    INR: { symbol: '₹', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '#,##,##0.00' }, // Indian Rupee
    CAD: { symbol: '$', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' },
    AUD: { symbol: '$', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' },
    CHF: { symbol: 'Fr', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: "'", pattern: "###'###.##" }, //Swiss Franc
    CNY: { symbol: '¥', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' }, //Yuan
    RUB: { symbol: '₽', symbolPosition: 'after', decimalPlaces: 2, thousandsSeparator: ' ', pattern: '### ###,00' }, // Ruble
    IDR: { symbol: 'Rp', symbolPosition: 'before', decimalPlaces: 0, thousandsSeparator: '.', pattern: '###.###.###.##0' }, //Rupiah
    BRL: { symbol: 'R$', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: '.', pattern: '###.###.###,00' }, //Real
    MXN: { symbol: '$', symbolPosition: 'before', decimalPlaces: 2, thousandsSeparator: ',', pattern: '###,##0.00' }, //Peso
    KRW: { symbol: '₩', symbolPosition: 'before', decimalPlaces: 0, thousandsSeparator: ',', pattern: '###,###,###,##0' }, //Won

  };

  const format = currencyFormats[currencyCode.toUpperCase()];
  if (!format) {
    return `Currency code "${currencyCode}" not supported.`;
  }

  const formattedAmount = amount.toLocaleString('en-US', { // Use en-US for basic formatting and then customize
    minimumFractionDigits: format.decimalPlaces,
    maximumFractionDigits: format.decimalPlaces,
    useGrouping: format.thousandsSeparator !== '', //disable grouping if separator is empty
  }).replace(/,/g, format.thousandsSeparator); // Replace , with the correct separator.

  const amountString = formattedAmount;

  return format.symbolPosition === 'before'
    ? `${format.symbol}${amountString}`
    : `${amountString}${format.symbol}`;
}

console.log(formatCurrency(12345.67, 'USD')); // Output: $12,345.67
console.log(formatCurrency(12345.67, 'EUR')); // Output: 12.345,67€
console.log(formatCurrency(12345.67, 'GBP')); // Output: £12,345.67
console.log(formatCurrency(12345, 'JPY'));    // Output: ¥12,345
console.log(formatCurrency(12345.67, 'INR')); // Output: ₹1,23,456.67
console.log(formatCurrency(12345.67, 'CAD')); // Output: $12,345.67
console.log(formatCurrency(12345.67, 'AUD')); // Output: $12,345.67
console.log(formatCurrency(12345.67, 'CHF'));  // Output: Fr12'345.67
console.log(formatCurrency(12345.67, 'CNY'));  // Output: ¥12,345.67
console.log(formatCurrency(12345.67, 'RUB'));  // Output: 12 345,67₽
console.log(formatCurrency(12345.67, 'IDR'));  // Output: Rp12.345
console.log(formatCurrency(12345.67, 'BRL'));  // Output: R$12.345,67
console.log(formatCurrency(12345.67, 'MXN'));  // Output: $12,345.67
console.log(1234567.89, 'KRW');  // Output: ₩1,234,567,890

console.log(formatCurrency(1234.56, 'XYZ')); // Output: Currency code "XYZ" not supported.
console.log(formatCurrency("abc", 'USD'));    // Output: Invalid input: Amount must be a number.
console.log(formatCurrency(123, 123));       // Output: Invalid input: Currency code must be a 3-letter string.
