// Print odds 1-20

let x = 1;
for (let x = 1; x <= 20; x++) {
  if (x % 2 !== 0) console.log(x);
}

// Decreasing Multiples of 3

let y = 100;
for (let y = 100; y >= 0; y--) {
  if (y % 3 === 0) console.log(y);
}

// Print the sequence

let z = 4;
for (let z = 4; z >= -3.5; z -= 1.5) {
  console.log(z);
}

// Sigma

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
  console.log(sum);
}

// Factorial

let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
  console.log(product);
}
