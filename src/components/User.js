import React from "react";

class User extends React.Component {

    render() {
        return(
          <div>
            <img src='https://github.com/BrittniKarat' alt='Profile picture'/>
            <div>
                <h2>name</h2>
                <h3>Total Repos: </h3>
                <h3>Total Followers: </h3>
            </div>
          </div>
        );
    }
}

export default User;