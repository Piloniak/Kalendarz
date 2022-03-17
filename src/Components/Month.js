import React from "react";
import Square from "./Square";

class Month extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let days=[];
        for(let i=1;i<=this.props.amountOfDays;i++){
            days.push(i);
        }

        const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month=months[this.props.month];

        return(
            <div>
                <h1>{this.props.year} - {month}</h1>
                <button onClick={() =>this.props.changingMonth(-1)}>w lewo</button>
                <button onClick={() =>this.props.changingMonth(1)}>w prawo</button>
                {days.map((day) =>
                <Square name={day} key={day} className="inMonth"/>)}
            </div>
        )
    }
}

export default Month