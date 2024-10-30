export function addVectors(v1, v2) {
  return {
      x: v1.x + v2.x,
      y: v1.y + v2.y,
  };
}

export function subtractVectors(v1, v2) {
  return {
      x: v1.x - v2.x,
      y: v1.y - v2.y,
  };
}

export function dotProduct(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}

export function magnitude(v) {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}
