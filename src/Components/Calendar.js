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
            weekday: 0,
        }
        this.addYear=this.addYear.bind(this);
        this.substractYear=this.substractYear.bind(this);
        this.addMonth=this.addMonth.bind(this);
        this.substractMonth=this.substractMonth.bind(this);
        this.addingDay=this.addingDay.bind(this);
        this.substractingDay=this.substractingDay.bind(this);
    }

    changingDisplay(display){
        let appearance = display;
        this.setState({appearance: appearance});
            
    }

    addYear(){
        let year=this.state.date.getFullYear();
        this.state.date.setFullYear(year+1);
        this.setState({year: this.state.date.getFullYear});
        //console.log(this.state.date);
    }

    substractYear(){
        let year=this.state.date.getFullYear();
        this.state.date.setFullYear(year-1);
        this.setState({year: this.state.date.getFullYear});
        //console.log(this.state.date);
    }

    addMonth(){
        let month=this.state.date.getMonth();
        this.state.date.setMonth(month+1);
        this.setState({month: this.state.date.getMonth});
        //console.log(this.state.date);
    }

    substractMonth(){
        let month=this.state.date.getMonth();
        this.state.date.setMonth(month-1);
        this.setState({month: this.state.date.getMonth});
        //console.log(this.state.date);
    }

    addingDay(adder){
        let day=this.state.date.getDate();
        this.state.date.setDate(day+1);
        this.setState({day: this.state.date.getDate});
        //console.log(this.state.date);
    }

    substractingDay(){
        let day=this.state.date.getDate();
        this.state.date.setDate(day-1);
        this.setState({day: this.state.date.getDate});
        //console.log(this.state.date);
    }

    render(){

        let appearance=this.state.appearance;
        let display;
        //console.log(this.state.date);
        let date = new Date(this.state.date.getFullYear(),this.state.date.getMonth()+1,0);
        let weekDayDate = new Date(this.state.date.getFullYear(),this.state.date.getMonth(),1);
        let weekDay=weekDayDate.getDay()-1;

        if(appearance==="year"){
            display = <Year year={this.state.date.getFullYear()} addingYear={this.addYear} substractingYear={this.substractYear} goingToMonthDisplay={this.changingDisplay}/>
        }else if(appearance==="month"){
            display = <Month amountOfDays={date.getDate()} year={this.state.date.getFullYear()} month={this.state.date.getMonth()} addingMonth={this.addMonth} substractingMonth={this.substractMonth} weekDay={weekDay} />
        }else if(appearance==="day"){
            display = <Day year={this.state.date.getFullYear()} month={this.state.date.getMonth()} day={this.state.date.getDate()} addingDay={this.addingDay} substractingDay={this.substractingDay} amountOfDays={date.getDate()}/>
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