import { Feedback } from './Feedback/Feedback';
import { GlobalStyles } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
  state = {
    goodNumbOfClicks: 0,
    neutralNumbOfClicks: 0,
    badNumbOfClicks: 0,
  };

  handleClick = evt => {
    console.log(evt);
  };

  render() {
    return (
      <div>
        <Feedback
          handleClick={this.handleClick}
          goodClicks={this.state.goodNumbOfClicks}
          neutralClicks={this.state.neutralNumbOfClicks}
          badClicks={this.state.badNumbOfClicks}
        />
        <Statistics
          goodClicks={this.state.goodNumbOfClicks}
          neutralClicks={this.state.neutralNumbOfClicks}
          badClicks={this.state.badNumbOfClicks}
        />
        <GlobalStyles />
      </div>
    );
  }
}
