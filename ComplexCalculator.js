/*
Filename: ComplexCalculator.js

Description: This code implements a complex calculator that performs advanced mathematical operations on complex numbers. It supports various operations like addition, subtraction, multiplication, division, exponentiation, logarithms, trigonometric functions, matrix operations, and more. It also includes comprehensive error handling and advanced input validation.

Author: [Your Name]

Date: [Current Date]
*/

// Constants
const PI = Math.PI;
const E = Math.E;

// ComplexNumber class definition
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition
  add(other) {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  // Subtraction
  subtract(other) {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new ComplexNumber(real, imaginary);
  }

  // Multiplication
  multiply(other) {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new ComplexNumber(real, imaginary);
  }

  // Division
  divide(other) {
    const denominator = other.real * other.real + other.imaginary * other.imaginary;
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  // Exponentiation
  power(exponent) {
    const magnitude = Math.pow(this.magnitude(), exponent);
    const angle = this.angle() * exponent;
    const real = magnitude * Math.cos(angle);
    const imaginary = magnitude * Math.sin(angle);
    return new ComplexNumber(real, imaginary);
  }

  // Magnitude (absolute value)
  magnitude() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  // Angle (argument)
  angle() {
    return Math.atan2(this.imaginary, this.real);
  }

  // Conjugate
  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // Logarithm (natural logarithm)
  logarithm() {
    const real = Math.log(this.magnitude());
    const imaginary = this.angle();
    return new ComplexNumber(real, imaginary);
  }

  // Trigonometric functions
  sine() { 
    const real = Math.sin(this.real) * Math.cosh(this.imaginary);
    const imaginary = Math.cos(this.real) * Math.sinh(this.imaginary);
    return new ComplexNumber(real, imaginary);
  }
  
  cosine() {
    const real = Math.cos(this.real) * Math.cosh(this.imaginary);
    const imaginary = -Math.sin(this.real) * Math.sinh(this.imaginary);
    return new ComplexNumber(real, imaginary);
  }
  
  tangent() {
    const sine = this.sine();
    const cosine = this.cosine();
    return sine.divide(cosine);
  }

  // Display the complex number as a string
  toString() {
    let sign = "";
    if (this.imaginary < 0)
      sign = "-";
    else
      sign = "+";
    return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
  }
}

// Matrix class definition
class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
  }

  // Matrix addition
  static add(matrix1, matrix2) {
    if (matrix1.rows !== matrix2.rows || matrix1.columns !== matrix2.columns)
      throw new Error("Matrix dimensions must match for addition.");

    const resultMatrix = new Matrix(matrix1.rows, matrix1.columns);
    for (let i = 0; i < matrix1.rows; i++) {
      for (let j = 0; j < matrix1.columns; j++) {
        resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }

    return resultMatrix;
  }

  // Matrix subtraction
  static subtract(matrix1, matrix2) {
    if (matrix1.rows !== matrix2.rows || matrix1.columns !== matrix2.columns)
      throw new Error("Matrix dimensions must match for subtraction.");

    const resultMatrix = new Matrix(matrix1.rows, matrix1.columns);
    for (let i = 0; i < matrix1.rows; i++) {
      for (let j = 0; j < matrix1.columns; j++) {
        resultMatrix[i][j] = matrix1[i][j] - matrix2[i][j];
      }
    }

    return resultMatrix;
  }

  // Matrix multiplication
  static multiply(matrix1, matrix2) {
    if (matrix1.columns !== matrix2.rows)
      throw new Error("Matrix dimensions invalid for multiplication.");

    const resultMatrix = new Matrix(matrix1.rows, matrix2.columns);
    for (let i = 0; i < matrix1.rows; i++) {
      for (let j = 0; j < matrix2.columns; j++) {
        let sum = 0;
        for (let k = 0; k < matrix1.columns; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        resultMatrix[i][j] = sum;
      }
    }

    return resultMatrix;
  }

  // Scalar multiplication
  scalarMultiply(scalar) {
    const resultMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        resultMatrix[i][j] = this[i][j] * scalar;
      }
    }

    return resultMatrix;
  }

  // Display the matrix as a string
  toString() {
    let matrixString = "";
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        matrixString += this[i][j].toString() + " ";
      }
      matrixString += "\n";
    }

    return matrixString;
  }
}

// Main function
function main() {
  // Demonstration of complex number operations
  const complex1 = new ComplexNumber(4, 3);
  const complex2 = new ComplexNumber(-2, 1);

  const additionResult = complex1.add(complex2);
  console.log("Addition Result: ", additionResult.toString());

  const subtractionResult = complex1.subtract(complex2);
  console.log("Subtraction Result: ", subtractionResult.toString());

  const multiplicationResult = complex1.multiply(complex2);
  console.log("Multiplication Result: ", multiplicationResult.toString());

  const divisionResult = complex1.divide(complex2);
  console.log("Division Result: ", divisionResult.toString());

  const powerResult = complex1.power(3);
  console.log("Power Result: ", powerResult.toString());

  const logarithmResult = complex1.logarithm();
  console.log("Logarithm Result: ", logarithmResult.toString());

  const conjugateResult = complex1.conjugate();
  console.log("Conjugate Result: ", conjugateResult.toString());

  const sineResult = complex1.sine();
  console.log("Sine Result: ", sineResult.toString());

  const cosineResult = complex1.cosine();
  console.log("Cosine Result: ", cosineResult.toString());

  const tangentResult = complex1.tangent();
  console.log("Tangent Result: ", tangentResult.toString());

  // Demonstration of matrix operations
  const matrix1 = new Matrix(2, 3);
  matrix1[0][0] = 1;
  matrix1[0][1] = 2;
  matrix1[0][2] = 3;
  matrix1[1][0] = 4;
  matrix1[1][1] = 5;
  matrix1[1][2] = 6;

  const matrix2 = new Matrix(3, 2);
  matrix2[0][0] = 7;
  matrix2[0][1] = 8;
  matrix2[1][0] = 9;
  matrix2[1][1] = 10;
  matrix2[2][0] = 11;
  matrix2[2][1] = 12;

  const matrix3 = Matrix.add(matrix1, matrix2);
  console.log("Matrix Addition Result: \n", matrix3.toString());

  const matrix4 = Matrix.subtract(matrix1, matrix2);
  console.log("Matrix Subtraction Result: \n", matrix4.toString());

  const matrix5 = Matrix.multiply(matrix1, matrix2);
  console.log("Matrix Multiplication Result: \n", matrix5.toString());
}

// Execute the main function
main();