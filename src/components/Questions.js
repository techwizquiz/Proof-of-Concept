/* eslint-disable max-len */
import React, { Component } from 'react';
import questionRandomizer from '../state/questionRandomizer';



export default class Questions extends Component {
  render() {
    return (
      <div>
        <p>Level: {level}</p>       
        <p>Question: {question}</p>       
        
        <div>       
          <input type="radio" name="answer" value="A">A: {answerA}</input>       
          <input type="radio" name="answer" value="B">B: {answerB}</input>       
          <input type="radio" name="answer" value="C">C: {answerC}</input>       
          <input type="radio" name="answer" value="D">D: {answerD}</input>
        </div>       
      </div>
    );
  }
}
