/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import questionRandomizer from '../state/questionRandomizer';
import { questions } from '../resources/QuestionPool';

const Questions = () => {
  const [seenQuestionIds, setSeenQuestionIds] = useState(() => JSON.parse(localStorage.getItem('seenQuestionIds')) || []);
  const [question, setQuestion] = useState(questionRandomizer(questions, seenQuestionIds));
  const [correct, setCorrect] = useState(+localStorage.getItem('correct'));
  const [incorrect, setIncorrect] = useState(+localStorage.getItem('incorrect'));
  const [selectedChoice, setSelectedChoice] = useState(null);

  console.log(question);

  useEffect(() => {
    localStorage.setItem('correct', correct);
  }, [correct]
  );

  useEffect(() => {
    localStorage.setItem('incorrect', incorrect);
  }, [incorrect]
  );

  useEffect(() => {
    localStorage.setItem('seenQuestionIds', JSON.stringify(seenQuestionIds));
  }, [seenQuestionIds]);

  const increment = (id) => {
    // setSeenQuestionIds: add new id to array of ids in state
    setSeenQuestionIds(seenQuestionIds => [...seenQuestionIds, id]);
    if(selectedChoice === question.answer) {
      setCorrect((prevCount) => prevCount + 1);
    } else {
      setIncorrect((prevCount) => prevCount + 1);
    }
  };

  console.log('seenQuestionIds', seenQuestionIds);

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

        <button onClick={() => increment(question.id)}>Submit</button>
        <p>Right Answers: {correct}</p>
        <p>Wrong Answers: {incorrect}</p>
      </div>
    </form>
  );
};

export default Questions;
