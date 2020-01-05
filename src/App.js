import React, { Component } from 'react';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio }); // ok
    // this.setState(prev => ({ displayBio: !prev.displayBio })); // ok, more safe
  };

  render() {
    return (
      <div>
        <h1>Hello!</h1>
        <p>My name is Selena.</p>
        <p>I am always looking forward to working on meaningful projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in America and code almost every day.</p>
            <p>My favorite languages are JavaScript and React.</p>
            <p>Besides coding, I also love piano and cooking!</p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
