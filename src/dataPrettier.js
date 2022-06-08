export function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "G" },
    { value: 1e15, symbol: "T" },
    { value: 1e18, symbol: "P" }
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}


export function dateFormatter(date){
  const toDate = new Date(date)
  let options = { year: 'numeric', month: 'short' } //{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return toDate.toLocaleDateString("en-US", options)
}




