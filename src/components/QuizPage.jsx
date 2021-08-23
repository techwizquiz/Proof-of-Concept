import React, { Component } from 'react';
import Questions from './Questions.js';

export default class QuizPage extends Component {
  render() {
    return (
      <>
        <form>
          {/* <Questions /> */}
          <div>
            <div className="question"></div>
            <div>Answer 1</div>
            <div>Answer 2</div>
            <div>Answer 3</div>
            <div>Answer 4</div>

            <button>Get Question</button>
          </div>
        </form>
      </>
    );
  }
}
