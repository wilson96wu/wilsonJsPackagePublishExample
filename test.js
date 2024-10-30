// test.js

import { addVectors, subtractVectors, dotProduct, magnitude } from './index.js';

const v1 = { x: 3, y: 4 };
const v2 = { x: 1, y: 2 };

console.log("Add Vectors:", addVectors(v1, v2));         // { x: 4, y: 6 }
console.log("Subtract Vectors:", subtractVectors(v1, v2)); // { x: 2, y: 2 }
console.log("Dot Product:", dotProduct(v1, v2));         // 11
console.log("Magnitude of v1:", magnitude(v1));           // 5
