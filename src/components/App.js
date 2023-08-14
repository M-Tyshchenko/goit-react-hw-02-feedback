import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { GlobalStyles } from './GlobalStyle';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  BtnHandleClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
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
            options={Object.keys(this.state)}
            onLeaveFeedback={this.BtnHandleClick}

          />
        </Section>

        <Section title="Statistics">
          {!this.state.good && !this.state.neutral && !this.state.bad ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePerc={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
        <GlobalStyles />
      </div>
    );
  }
}
