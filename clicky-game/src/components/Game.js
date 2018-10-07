import React, { Component } from 'react';
import data from '../data.json';
import Header from './Header';
import ClickItem from './ClickItem';
import Container from './Container';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      data,
      score: 0,
      topScore: 0
    };
  }

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  handleCorrectGuess = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  resetData = data => {
    const resetData = data.map(item => ({ ...item, clicked: false }));
    return this.shuffleData(resetData);
  };

  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  // clickCount() {
  //   let clickNum = this.state.clicks;

  //   clickNum = clickNum + 1;

  //   this.setState({
  //     clicks: clickNum
  //   });
  // }

  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectGuess(newData)
      : this.handleIncorrectGuess(newData);
  };

  render() {
    console.log('state', this.state);
    return (
      <div>
        <Header clicks={this.state.score} topClicks={this.state.topScore}/>
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              image={item.image}
              handleClick={this.handleItemClick}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;
