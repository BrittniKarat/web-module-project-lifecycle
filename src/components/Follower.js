import React from "react";

class Follower extends React.Component {
    render(){
        return(<div>
            <img src={this.props.img} alt='Profile pic'/>
            <h4>{this.props.name}</h4>
        </div>)
    }
}

export default Follower;