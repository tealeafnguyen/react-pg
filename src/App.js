import React, { Component } from 'react';
import Clickable from "./components/Clickable"
import './App.css';
import Header from "./components/Header"
import clickables from "./cards.json"

class App extends Component {

  state = {
    clicked: [],
    clickables,
    score: 0,
    size: clickables.length
  }

  reset = () => {
    this.state.score = 0
    this.state.clicked = [];
    this.state.clickables = this.shuffle(this.state.clickables);
    this.forceUpdate();
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  lose() {
    alert('You lose');
    this.reset();
  }

  win() {
    alert('You Win');
    this.reset();
  }

  clicked = id => {
    var lose = false;
    for (var i = 0; i < this.state.clicked.length; i++) {
      if (this.state.clicked[i] == id.toString()) {
        //if clicked id exists
        lose = true;
        this.lose();
      }
    }

    if (lose == false) {
      this.state.clicked.push(id.toString());
      this.state.clickables = this.shuffle(this.state.clickables);
      this.state.score++;
      this.forceUpdate();
      if(this.state.score == this.state.size){
        this.win();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          reset={this.reset}
        />
        <center>
          <div className='playArea'>
            {this.state.clickables.map(stuff => {
              return (
                <Clickable
                  id={stuff.id}
                  image={stuff.image}
                  clicked={this.clicked}
                />
              );
            })}
          </div>
        </center>
      </div>
    )
  }
}

export default App;
