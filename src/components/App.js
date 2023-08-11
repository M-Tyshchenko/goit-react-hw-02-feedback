import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { GlobalStyles } from './GlobalStyle';
import { Section } from './Section/Section';
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

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    if (good === 0) {
      return 0;
    }
    return Math.round((good * 100) / total);
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodHandleClick={this.goodBtnHandleClick}
            neutralHandleClick={this.neutralBtnHandleClick}
            badHandleClick={this.badBtnHandleClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePerc={this.countPositiveFeedbackPercentage}
          />
        </Section>
        <GlobalStyles />
      </div>
    );
  }
}
