import React from "react";
import Square from "./Square";

class Day extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let hours=[];
        for(let i=1;i<=24;i++){
            hours.push(i);
        }
        return(
            <div>
                <h1>To jest widok dnia</h1>
                {hours.map((hour) =>
                <Square name={hour} className="inDay"/>)}
            </div>
        )
    }
}

export default Day