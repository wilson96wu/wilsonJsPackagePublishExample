
```md
# Wilson JS Package Publish Example

A simple math utility package for Cocos Creator projects.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [addVectors](#addvectors)
  - [subtractVectors](#subtractvectors)
  - [dotProduct](#dotproduct)
  - [magnitude](#magnitude)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This package provides basic vector math operations such as addition, subtraction, dot product, and magnitude calculation. It is designed to be used in Cocos Creator projects.

## Installation

To install the package, run the following command:

```bash
npm install wilson-js-package-publish-example
```

## Usage

To use the package, import the functions you need from the `index.js` file:

```js
import { addVectors, subtractVectors, dotProduct, magnitude } from 'wilson-js-package-publish-example';

const v1 = { x: 3, y: 4 };
const v2 = { x: 1, y: 2 };

console.log("Add Vectors:", addVectors(v1, v2));         // { x: 4, y: 6 }
console.log("Subtract Vectors:", subtractVectors(v1, v2)); // { x: 2, y: 2 }
console.log("Dot Product:", dotProduct(v1, v2));         // 11
console.log("Magnitude of v1:", magnitude(v1));           // 5
```

## API

### addVectors

Adds two vectors.

```js
function addVectors(v1, v2)
```

- **v1**: Object - The first vector.
- **v2**: Object - The second vector.

Returns an object representing the sum of the two vectors.

### subtractVectors

Subtracts the second vector from the first vector.

```js
function subtractVectors(v1, v2)
```

- **v1**: Object - The first vector.
- **v2**: Object - The second vector.

Returns an object representing the difference of the two vectors.

### dotProduct

Calculates the dot product of two vectors.

```js
function dotProduct(v1, v2)
```

- **v1**: Object - The first vector.
- **v2**: Object - The second vector.

Returns a number representing the dot product of the two vectors.

### magnitude

Calculates the magnitude of a vector.

```js
function magnitude(v)
```

- **v**: Object - The vector.

Returns a number representing the magnitude of the vector.

## Testing

To run the tests, use the following command:

```bash
npm test
```
## Login

To login to npm, use the following command:

```bash
npm login
```

## Publish

To login to npm, use the following command:

```bash
npm publish
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.