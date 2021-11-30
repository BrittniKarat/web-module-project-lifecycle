import React from "react";

class User extends React.Component {

    render() {
        return(
          <div>
            <img src={this.props.gitInfo.avatar_url} alt='Profile picture'/>
            <div>
                <h2>{this.props.gitInfo.name}</h2>
                <h3>Total Repos: {this.props.gitInfo.public_repos} </h3>
                <h3>Total Followers: {this.props.gitInfo.followers}</h3>
            </div>
          </div>
        );
    }
}

export default User;