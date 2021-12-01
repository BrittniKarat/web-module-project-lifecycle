import React from "react";
import styled from 'styled-components';

const UserDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

    img{
      border: black 2px solid;
      border-radius: 30px;
      box-shadow: 3px 3px 3px;
      margin: 6%;
    }
`

class User extends React.Component {

    render() {
        return(
          <UserDiv>
            <img src={this.props.gitInfo.avatar_url} alt='Profile picture'/>
            <div>
                <h2>{this.props.gitInfo.name}</h2>
                <h3>Total Repos: {this.props.gitInfo.public_repos} </h3>
                <h3>Total Followers: {this.props.gitInfo.followers}</h3>
            </div>
          </UserDiv>
        );
    }
}

export default User;