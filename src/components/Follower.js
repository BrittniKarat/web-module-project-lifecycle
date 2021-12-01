import React from "react";
import styled from "styled-components";


const FollowerDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 1.5%;

    img{
      border: black 2px solid;
      border-radius: 30px;
      box-shadow: 3px 3px 3px;
      margin: 0 6%;
      width: 150px;
    }
    h4{
        font-size: 1.5rem;
        margin: 2% 0 6% 0;
    }
`

class Follower extends React.Component {
    state = ({
        user: ''
    })
   
    render(){
        return(<FollowerDiv >
            <img src={this.props.img} alt='Profile pic'/>
            <h4>{this.props.name}</h4>
        </FollowerDiv>)
    }
}

export default Follower;