import React from "react";
import Year from "./Year";
import Month from "./Month";
import Day from "./Day";
import Form from "./Form";

class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            appearance: "year",
        }
        
    }

    changingDisplay(display){
        this.setState({appearance: display})
    }

    render(){

        let appearance=this.state.appearance;
        let display;

        if(appearance==="year"){
            display = <Year/>
        }else if(appearance==="month"){
            display = <Month amountOfDays={31}/>
        }else if(appearance==="day"){
            display = <Day/>
        }else{
            display = <h1>JAK?????</h1>;
        }
        
        return (
            <div className={this.state.appearance}>
                
                {display}
                <br/>

                <button onClick={() => this.changingDisplay("year")} className="changingButtons">Widok rok</button>
                <button onClick={() => this.changingDisplay("month")} className="changingButtons">Widok miesiąc</button>
                <button onClick={() => this.changingDisplay("day")} className="changingButtons">Widok dzien</button>
                
            </div>
        )
    }

}

export default Calendar