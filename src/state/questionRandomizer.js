/* eslint-disable max-len */
const questionRandomizer = (questionArr, stateArr) => {
  // pick random object from array depending on length of array
  // if new question is in seenQuestions array, choose a different question
  // if not in seenQuestions array, push question into seenQuestions array and return the question
  const newQuestionIndex = Math.floor(Math.random() * questionArr.length);
  if (stateArr.includes(questionArr[newQuestionIndex].id) === false) {
    // set stateArr to include id of the newly selected question
    return questionArr[newQuestionIndex];
  }
};

export default questionRandomizer;
