import React from "react";
import Follower from './Follower';
import styled from "styled-components";

const FLDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

class FollowerList extends React.Component {

    render() {
        return(<FLDiv>
            
            {this.props.followers.map( user => {
               return ( <Follower img={user.avatar_url} name={user.login} key={user.id}/>
                )
            })}
        
        </FLDiv>)
    }
}

export default FollowerList;