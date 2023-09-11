const questions = [
  {
    id: 1,
    question: 'Which of the following is not a JavaScript data type?',
    options: [
      {
        id: 1,
        text: 'Number: Represents numeric values like 42 or 3.14',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'String: Represents text values enclosed in single or double quotes',
        isCorrect: false,
      },
      {
        id: 3,
        text: 'Boolean: Represents true or false values',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'Float: Represents floating-point numbers like 3.14 or 0.001',
        isCorrect: true,
      },
    ],
  },
  {
    id: 2,
    question: 'What is the purpose of the "break" statement in JavaScript?',
    options: [
      {
        id: 1,
        text: 'To create a line break in text strings',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'To terminate the current loop or switch statement and transfer control to the next statement',
        isCorrect: true,
      },
      {
        id: 3,
        text: 'To stop the execution of the entire JavaScript program',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'To indicate a conditional statement in JavaScript',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    question: 'What is the purpose of a constructor in object-oriented programming (OOP)?',
    options: [
      {
        id: 1,
        text: 'To create a new instance of a class or object',
        isCorrect: true,
      },
      {
        id: 2,
        text: 'To delete an object from memory',
        isCorrect: false,
      },
      {
        id: 3,
        text: 'To modify the properties of an existing object',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'To define global variables in a program',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'What is an algorithm in computer science?',
    options: [
      {
        id: 1,
        text: 'A computer program that performs a specific task',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'A step-by-step procedure for solving a problem or accomplishing a task',
        isCorrect: true,
      },
      {
        id: 3,
        text: 'A hardware component of a computer',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'A type of computer memory',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: 'What is the main purpose of a database management system (DBMS)?',
    options: [
      {
        id: 1,
        text: 'To create and manage graphic designs for websites',
        isCorrect: false,
      },
      {
        id: 2,
        text: 'To store, organize, and manage data in a structured way',
        isCorrect: true,
      },
      {
        id: 3,
        text: 'To display interactive web content to users',
        isCorrect: false,
      },
      {
        id: 4,
        text: 'To enhance the security of a computer network',
        isCorrect: false,
      },
    ],
  },
];

// const questions = [
//   {
//     id: 1,
//     question: 'Which of the following is not a JavaScript data type?',
//     options: [
//       { id: 1, text: 'Number', isCorrect: false },
//       { id: 2, text: 'String', isCorrect: false },
//       { id: 3, text: 'Boolean', isCorrect: false },
//       { id: 4, text: 'Float', isCorrect: true },
//     ],
//   },
//   {
//     id: 2,
//     question: 'What is the result of 2 + "2" in JavaScript?',
//     options: [
//       { id: 1, text: '4', isCorrect: true },
//       { id: 2, text: '22', isCorrect: false },
//       { id: 3, text: 'NaN', isCorrect: false },
//       { id: 4, text: 'Error', isCorrect: false },
//     ],
//   },
//   {
//     id: 3,
//     question:
//       'Which built-in method removes the last element from an array and returns that element?',
//     options: [
//       { id: 1, text: 'pop()', isCorrect: true },
//       { id: 2, text: 'last()', isCorrect: false },
//       { id: 3, text: 'remove()', isCorrect: false },
//       { id: 4, text: 'delete()', isCorrect: false },
//     ],
//   },
//   {
//     id: 4,
//     question: 'What does the JavaScript `typeof` operator return when used with a function?',
//     options: [
//       { id: 1, text: 'function', isCorrect: true },
//       { id: 2, text: 'object', isCorrect: false },
//       { id: 3, text: 'undefined', isCorrect: false },
//       { id: 4, text: 'string', isCorrect: false },
//     ],
//   },
//   {
//     id: 5,
//     question: 'Which statement is used to stop the execution of a loop in JavaScript?',
//     options: [
//       { id: 1, text: 'stop', isCorrect: false },
//       { id: 2, text: 'break', isCorrect: true },
//       { id: 3, text: 'halt', isCorrect: false },
//       { id: 4, text: 'exit', isCorrect: false },
//     ],
//   },
// ];

export default questions;
