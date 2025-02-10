function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  if (typeof a === 'string' || typeof b === 'string') {
    return parseFloat(a.toString()) + parseFloat(b.toString());
  } else {
    return a + b;
  }
}

let result = addSafe("10", 10); // Returns 20
let result2 = addSafe(10, 20); // Returns 30