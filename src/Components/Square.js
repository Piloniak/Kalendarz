import React from "react";

class Square extends React.Component{
    
    render(){
        return(
            <div className={this.props.className} onClick={this.props.clickFunction}>
                {this.props.name}
            </div>
        )
    }
}

export default Square