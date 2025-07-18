// An efficient iterative implementation of the Fibonacci sequence
function fibonacci(position: number): number {
  // Input validation
  if (position !== Math.floor(position)) {
    throw new Error('Position must be an integer');
  }
  
  if (position < 0) {
    throw new Error('Position must be non-negative');
  }
  
  // Handle base cases
  if (position <= 1) {
    return position;
  }
  
  // Iterative approach to avoid recursion and eliminate duplication
  let previousValue = 0;
  let currentValue = 1;
  
  for (let currentPosition = 2; currentPosition <= position; currentPosition++) {
    const nextValue = previousValue + currentValue;
    previousValue = currentValue;
    currentValue = nextValue;
  }
  
  return currentValue;
}

// Example usage and testing
console.log('Fibonacci sequence examples:');
for (let i = 0; i <= 10; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}
