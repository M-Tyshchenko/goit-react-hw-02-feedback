import { Feedback } from './Feedback/Feedback';
import { GlobalStyles } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badBtnHandleClick = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Feedback
          goodHandleClick={this.goodBtnHandleClick}
          neutralHandleClick={this.neutralBtnHandleClick}
          badHandleClick={this.badBtnHandleClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        <GlobalStyles />
      </div>
    );
  }
}
