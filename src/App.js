import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';

class App extends React.Component {
  render() {
    return(<div>
      Github Card
      <form>
        <input type='text' placeholder='GitHub Handle'/>
        <button> Search </button>
      </form>
      <User />
      <FollowerList />
    </div>);
  }
}

export default App;
