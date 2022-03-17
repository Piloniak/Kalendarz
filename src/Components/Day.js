import React from "react";
import Square from "./Square";
import Form from "./Form";

class Day extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let hours=[];
        for(let i=1;i<=24;i++){
            hours.push(i);
        }
        const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month=months[this.props.month];
        return(
            <div>
                <h1>{this.props.year}-{month}-{this.props.day}</h1>
                <button onClick={() =>this.props.changingDay(-1)}>w lewo</button>
                <button onClick={() =>this.props.changingDay(1)}>w prawo</button>
                {hours.map((hour) =>
                <Square name={hour} key={hour} className="inDay"/>)}
                <Form/>
            </div>
        )
    }
}

export default Day