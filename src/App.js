import React from 'react';
import User from './components/User';
import FollowerList from './components/FollowerList';
import axios from 'axios';
import styled from 'styled-components';

const AppDiv = styled.div`
    
    h1{
      text-align: center;
      font-size: 3rem;
      margin-bottom: 0;
    }

    h2{
      font-size: 2rem;

    }

    form{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    input{
      border:${(pr) => pr.theme.tertiaryColorBG} 3px solid;
      border-radius: 10px;
      background-color: ${(pr) => pr.theme.secondaryColor};
      color:${(pr) => pr.theme.tertiaryColorBG};
      height: 30px;
      font-weight: bold;
    }

    button{
      background-color: ${(pr) => pr.theme.tertiaryColorBG};
      color:${(pr) => pr.theme.secondaryColor};
      border: none;
      padding: 2% 4%;
      margin: 2%;
      border-radius: 6px;
      font-weight: bold;
      font-size: 1rem;
    }
`

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
          user: ''
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
    return(<AppDiv>
      <h1> GitHub Cards</h1>
      <form>
        <input onChange={this.handleChange} type='text' placeholder='GitHub Handle' value={this.state.user}/>
        <button onClick={this.handleClick}> Search </button>
      </form>
      <User gitInfo={this.state.gitInfo}/>
      <h2>Followers:</h2>
      <FollowerList followers={this.state.followers}/>
    </AppDiv>);
  }
}

export default App;
