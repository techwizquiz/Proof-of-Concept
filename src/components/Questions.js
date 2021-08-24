/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import questionRandomizer from '../state/questionRandomizer';
import { questions } from '../resources/QuestionPool';

// on load, choose a random question
// display question and answers
// user chooses their answer
// if correct, they get one point added to score and new question loads
// if incorrect, new question loads

const Questions = () => {
  const [question, setQuestion] = useState(questionRandomizer(questions));
  const [correct, setCorrect] = useState(+localStorage.getItem('correct'));
  const [incorrect, setIncorrect] = useState(+localStorage.getItem('incorrect'));
  const [selectedChoice, setSelectedChoice] = useState(null);

  useEffect(() => {
    localStorage.setItem('correct', correct);
  }, [correct]
  );

  useEffect(() => {
    localStorage.setItem('incorrect', incorrect);
  }, [incorrect]
  );

  //   const storeScoreValue = (key, defaultValue) => {
  //     const [state, setState] = useState(
  //       localStorage.getItem(key) || defaultValue
  //     );
  //     useEffect(() => {
  //       localStorage.setItem(key, state);
  //     }, [key, state]);

  //     return [state, setState];
  //   };

 

  const increment = () => {
    if(selectedChoice === question.answer) {
      setCorrect((prevCount) => prevCount + 1);
    } else {
      setIncorrect((prevCount) => prevCount + 1);
    }
    
  };
 
  console.log(selectedChoice);
  console.log(question.answer);


  return (
    <form>
      <div>
        <p>Question: {question.question}</p>

        <div>
          <label><input type="radio" name="answer" value="A" onClick={({ target }) => setSelectedChoice(target.value)} /> A: {question.choiceA}</label>

          <label><input type="radio" name="answer" value="B" onClick={({ target }) => setSelectedChoice(target.value)} />B:  {question.choiceB}</label>

          <label><input type="radio" name="answer" value="C" onClick={({ target }) => setSelectedChoice(target.value)} />C: {question.choiceC}</label>

          <label><input type="radio" name="answer" value="D" onClick={({ target }) => setSelectedChoice(target.value)} />D: {question.choiceD}</label>

        </div>

        <button onClick={increment}>Submit</button>
        <p>Right Answers: {correct}</p>
        <p>Wrong Answers: {incorrect}</p>
      </div>
    </form>
  );
};

export default Questions;

// export default class Questions extends Component {
//   render() {
//     return (
//       <div>
//         <p>Level: {level}</p>       
//         <p>Question: {question}</p>       

//         <div>       
//           <input type="radio" name="answer" value="A">A: {choiceA}</input>       
//           <input type="radio" name="answer" value="B">B: {choiceB}</input>       
//           <input type="radio" name="answer" value="C">C: {choiceC}</input>       
//           <input type="radio" name="answer" value="D">D: {choiceD}</input>
//         </div>       
//       </div>
//     );
//   }
// }

// const correct = () => {
//   const [correct, setCorrect] = useState(null);
//   const [incorrect, setIncorrect] = useState(null);

//   const selectedChoice =

// const increment = () => {
//   if (selectedChoice === questions.answer) {
//     setCorrect((prevCount) => prevCount + 1);
//   } else {
//     setIncorrect((prevCount) => prevCount + 1);
//   }
// };
//   return (
//     <p>correct: `${correct}`</p>
//   );
// };
