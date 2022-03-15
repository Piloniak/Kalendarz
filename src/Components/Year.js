import React from "react";
import Square from "./Square";
import "./components.css";

class Year extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return(
            <div>
                <h1>To jest widok roku</h1>
                {months.map((month) =>
                <Square name={month} className="inYear"/>)}
            </div>
        )
    }
}

export default Year