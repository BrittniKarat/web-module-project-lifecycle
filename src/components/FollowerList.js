import React from "react";
import Follower from './Follower';

class FollowerList extends React.Component {

    render() {
        return(<div>
            
            {this.props.followers.map( user => {
               return ( <Follower img={user.avatar_url} name={user.login} key={user.id}/>
                )
            })}
        
        </div>)
    }
}

export default FollowerList;