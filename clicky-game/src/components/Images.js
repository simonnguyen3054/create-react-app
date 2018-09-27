import React, { Component } from 'react';
import '../styles/images.css';

class Images extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_China.png',
        'https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png',
        'https://upload.wikimedia.org/wikipedia/en/2/20/Flag_of_Mexico_1917.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Saudi_Arabia_%281938_to_1973%29.svg/750px-Flag_of_Saudi_Arabia_%281938_to_1973%29.svg.png',
        'https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Flag_of_the_Philippines_%281919-1936%29.svg/2000px-Flag_of_the_Philippines_%281919-1936%29.svg.png',
        'https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_Japan_%28with_border%29.png',
        'https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.png',
        'https://vignette.wikia.nocookie.net/conworld/images/f/f0/Flag_of_Kenyan_Republic.png/revision/latest?cb=20120929033549',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_the_United_States_%28upside_down%29.svg/2000px-Flag_of_the_United_States_%28upside_down%29.svg.png'
      ],
      clicks: 0
    };

    this.shuffle = this.shuffle.bind(this);
    this.clickCount = this.clickCount.bind(this);
  }

  shuffle() {
    let array = this.state.data;
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({
      data: array
    });
  }

  clickCount() {
    let clickNum = this.state.clicks;

    clickNum = clickNum + 1;

    this.setState({
      clicks: clickNum
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <div>
        <div>Clicks Count: {this.state.clicks}</div>
        {this.state.data.map(image => (
          <img
            onClick={() => {
              this.clickCount();
              this.shuffle();
            }}
            className="image"
            src={image}
            alt="image"
          />
        ))}
      </div>
    );
  }
}

export default Images;
