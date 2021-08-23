import React, { Component } from 'react';

export default class QuizPage extends Component {
  render() {
    return (
      <div>
        <div className="question"></div>
        <div>Answer 1</div>
        <div>Answer 2</div>
        <div>Answer 3</div>
        <div>Answer 4</div>

        <button>Get Question</button>
      </div>
    );
  }
}
