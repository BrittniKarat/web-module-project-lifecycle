import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';


class App extends React.Component {
  state = {
    gitInfo: {},
    user: '',
    followers: []
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/BrittniKarat')
      .then( res => { 
        this.setState({
          ...this.state,
          gitInfo: res.data,
        })
        console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })

      axios.get(`https://api.github.com/users/BrittniKarat/followers`)
          .then(resp => 
            this.setState({
              ...this.state,
              followers: resp.data
            }) 
          )
          .catch(err => console.error(err)) 
    }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      user: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        this.setState({
          ...this.state,
          gitInfo: res.data,
        })
      })
      .catch(err => {
        console.error(err)
      })
      axios.get(`https://api.github.com/users/${this.state.user}/followers`)
          .then(resp => 
            this.setState({
              ...this.state,
              followers: resp.data,
              user: ''
            }) 
          )
          .catch(err => console.error(err)) 
  }
  render() {
    return(<div>
      Github Card
      <form>
        <input onChange={this.handleChange} type='text' placeholder='GitHub Handle'/>
        <button onClick={this.handleClick}> Search </button>
      </form>
      <User gitInfo={this.state.gitInfo}/>
      <h2>Followers:</h2>
      <FollowerList followers={this.state.followers}/>
      {console.log(this.state.followers)}
    </div>);
  }
}

export default App;
