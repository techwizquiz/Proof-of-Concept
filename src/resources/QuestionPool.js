/* eslint-disable max-len */
//add levels 
export const questions = [
  {
    id: 1,
    question: 'What is node?',
    answer: 'D',
    choiceA: 'a theme extension for VSCode',
    choiceB: 'its own language',
    choiceC: 'an alternative to CRUD routes',
    choiceD: 'open-source, cross-platform, back-end JavaScript runtime environment',
    userName: 'Shannon'
  },
  {
    id: 2,
    question: `What is the output: function sayHi() {
        console.log(name);
        console.log(age);
        var name = 'Lydia';
        let age = 21;
      }`,
    answer: 'D',
    choiceA: 'Lydia and undefined',
    choiceB: 'Lydia and ReferenceError',
    choiceC: 'ReferenceError and 21',
    choiceD: 'undefined and ReferenceError',
    userName: 'Lydia'
  },
  {
    id: 3,
    question: `for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }`,
    answer: 'C',
    choiceA: '0 1 2 and 0 1 2',
    choiceB: '0 1 2 and 3 3 3',
    choiceC: '3 3 3 and 0 1 2',
    choiceD: '0 1 1 and 3 1 2',
    userName: 'Lydia'
  },
];
