# Fibonacci TypeScript Implementation

An efficient iterative implementation of the Fibonacci sequence in TypeScript with comprehensive input validation and error handling.

## Features

- **Efficient Algorithm**: O(n) time complexity using iterative approach (vs O(2^n) for naive recursion)
- **Input Validation**: Validates integer inputs and non-negative values
- **Error Handling**: Descriptive error messages for invalid inputs
- **Type Safety**: Written in TypeScript with proper type annotations
- **Clean Code**: Well-documented with clear variable names

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fibonacci-typescript
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## Usage

### Running the TypeScript Code

To compile and run the TypeScript code:

```bash
# Compile TypeScript to JavaScript
npx tsc main.ts

# Run the compiled JavaScript
node main.js
```

### Alternative: Using ts-node (Optional)

If you want to run TypeScript directly without compilation:

```bash
# Install ts-node globally (optional)
npm install -g ts-node

# Run TypeScript directly
npx ts-node main.ts
```

## Code Structure

### Main Function

The `fibonacci(position: number)` function:
- Takes a position parameter (0-indexed)
- Returns the Fibonacci number at that position
- Validates input is a non-negative integer
- Uses iterative approach for optimal performance

### Example Usage

```typescript
fibonacci(0);  // Returns: 0
fibonacci(1);  // Returns: 1
fibonacci(5);  // Returns: 5
fibonacci(10); // Returns: 55
```

### Error Handling

The function throws descriptive errors for invalid inputs:

```typescript
fibonacci(-1);   // Error: Position must be non-negative
fibonacci(3.5);  // Error: Position must be an integer
```

## Performance Comparison

| Algorithm | Time Complexity | Space Complexity | fibonacci(40) |
|-----------|----------------|------------------|---------------|
| Naive Recursion | O(2^n) | O(n) | ~1.5 seconds |
| Iterative (This) | O(n) | O(1) | ~0.001 seconds |

## Development

### Project Structure

```
fibonacci-typescript/
├── main.ts          # Main TypeScript implementation
├── tsconfig.json    # TypeScript configuration
├── .gitignore       # Git ignore patterns
├── package.json     # Node.js dependencies
└── README.md        # This file
```

### TypeScript Configuration

The project uses the following TypeScript configuration:
- Target: ES2015
- Module: CommonJS
- Strict type checking enabled
- DOM and ES2015 libraries included

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Additional Information

This implementation demonstrates:
- Efficient algorithm design
- Input validation best practices
- TypeScript type safety
- Clean, readable code structure
- Proper error handling