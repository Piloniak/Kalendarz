import React from "react";
import Year from "./Year";
import Month from "./Month";
import Day from "./Day";


class Calendar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            appearance: "year",
            date: new Date("2022-01-01"),
            year: 2022,
            month: 1,
            day: 1,
        }
        // this.changingYear=this.changingYear.bind(this);
        // this.changingMonth=this.changingMonth.bind(this);
        // this.changingDay=this.changingDay.bind(this);
    }

    changingDisplay(display){
        this.setState({appearance: display});
            
    }

    // changingYear(adder){
    //     let year=this.state.date.getFullYear();
    //     this.state.date.setFullYear(year+adder);
    //     this.setState({year: this.state.date.getFullYear});
    //     //console.log(this.state.date);
    // }

    // changingMonth(adder){
    //     let month=this.state.date.getMonth();
    //     this.state.date.setMonth(month+adder);
    //     this.setState({month: this.state.date.getMonth});
    //     //console.log(this.state.date);
    // }

    // changingDay(adder){
    //     let day=this.state.date.getDate();
    //     this.state.date.setDate(day+adder);
    //     this.setState({day: this.state.date.getDate});
    //     //console.log(this.state.date);
    // }

    render(){

        let appearance=this.state.appearance;
        let display;
        //console.log(this.state.date);
        let date = new Date(this.state.date.getFullYear(),this.state.date.getMonth()+1,0);
        console.log(date);

        if(appearance==="year"){
            display = <Year year={this.state.date.getFullYear()} /*changingYear={this.changingYear}*//>
        }else if(appearance==="month"){
            display = <Month amountOfDays={date.getDate()} year={this.state.date.getFullYear()} month={this.state.date.getMonth()} /*changingMonth={this.changingMonth}*//>
        }else if(appearance==="day"){
            display = <Day year={this.state.date.getFullYear()} month={this.state.date.getMonth()} day={this.state.date.getDate()} /*changingDay={this.changingDay}*//>
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