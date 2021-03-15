import React, { Component } from 'react';
import { PersonList } from './PersonList';

class App extends Component {
  state = { people: [] }
  
  render() {
    return (
      <div>
        <PersonList people={this.state.props} />
      </div>
    );
  }
}

export default App;
