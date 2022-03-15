import React from "react";

class Square extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className={this.props.className}>
                {this.props.name}
            </div>
        )
    }
}

export default Square