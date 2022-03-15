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
        return(
            <div>
                <h1>To jest widok miesiąca</h1>
                {days.map((day) =>
                <Square name={day} className="inMonth"/>)}
            </div>
        )
    }
}

export default Month