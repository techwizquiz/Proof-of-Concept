/* eslint-disable max-len */
import React, { Component } from 'react';
import questionRandomizer from '../state/questionRandomizer';

// on load, choose a random question
// display question and answers
// user chooses their answer
// if correct, they get one point added to score and new question loads
// if incorrect, new question loads

export default class Questions extends Component {
  render() {
    return (
      <div>
        <p>Level: {level}</p>       
        <p>Question: {question}</p>       
        
        <div>       
          <input type="radio" name="answer" value="A">A: {choiceA}</input>       
          <input type="radio" name="answer" value="B">B: {choiceB}</input>       
          <input type="radio" name="answer" value="C">C: {choiceC}</input>       
          <input type="radio" name="answer" value="D">D: {choiceD}</input>
        </div>       
      </div>
    );
  }
}
