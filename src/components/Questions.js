/* eslint-disable max-len */
import React, { useState } from 'react';
import questionRandomizer from '../state/questionRandomizer';
import { questions } from '../resources/QuestionPool';

// on load, choose a random question
// display question and answers
// user chooses their answer
// if correct, they get one point added to score and new question loads
// if incorrect, new question loads

const Questions = () => {
  const [question, setQuestion] = useState(questionRandomizer(questions));

  console.log(question);

  return (
    <div>       
      <p>Question: {question.question}</p>       
      
      <div>       
        <label><input type="radio" name="answer" value="A" /> A: {question.choiceA}</label>
        <label><input type="radio" name="answer" value="B"/>B: {question.choiceB}</label>   
        <label><input type="radio" name="answer" value="C"/>C: {question.choiceC}</label>       
        <label><input type="radio" name="answer" value="D"/>D: {question.choiceD}</label>
      </div>       
    </div>
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
