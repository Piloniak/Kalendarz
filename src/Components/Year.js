import React from "react";
import Square from "./Square";
import "./components.css";

class Year extends React.Component {

    constructor(props){
        super(props);
        this.state={
            years: [],
            months: [],
            days: [],
            events: [],
            hours: [],

            monthsWithEvents: [],
        }
        this.clickOnMonth=this.clickOnMonth.bind(this);
        this.changeAddYear=this.changeAddYear.bind(this);
        this.changeSubstractYear=this.changeSubstractYear.bind(this);
    }

    clickOnMonth(){
        this.props.goingToMonthDisplay("month");        
    }

    componentDidMount(){
        if(localStorage.getItem('year')){
            let dataBaseYearsString = localStorage.getItem('year');
            let dataBaseYearsTable=[];
            for(let i=0;i<dataBaseYearsString.length;i+=5){
                dataBaseYearsTable.push(dataBaseYearsString.slice(i,i+4));
            }

            let dataBaseMonthsString = localStorage.getItem('month');
            let dataBaseMonthsTable = [];

            let j=0;

            let commaChecker;

            for(let i=0;i<dataBaseMonthsString.length;i++){
                if(dataBaseMonthsString[i]===','){
                    commaChecker=true;
                    break;
                }else{
                    commaChecker=false;
                }
            }
            
            if(commaChecker){
                dataBaseMonthsTable.push(dataBaseMonthsString.slice(0,dataBaseMonthsString.length));
            }
            
            for(let i=0;i<dataBaseMonthsString.length;i++){
                if(dataBaseMonthsString[i+1]==','||i==dataBaseMonthsString.length-1){
                    dataBaseMonthsTable.push(dataBaseMonthsString.slice(j,i+1));
                    j=i+2;
                }
            }   
            dataBaseMonthsTable.shift();

            j=0;

            let dataBaseDaysString = localStorage.getItem('day');
            let dataBaseDaysTable = [];

            for(let i=0;i<dataBaseDaysString.length;i++){
                if(dataBaseDaysString[i]===','){
                    commaChecker=true;
                    break;
                }else{
                    commaChecker=false;
                }
            }  

            if(commaChecker){
                dataBaseDaysTable.push(dataBaseDaysString.slice(0,dataBaseDaysString.length));
            }
            
            for(let i=0;i<dataBaseDaysString.length;i++){
                if(dataBaseDaysString[i+1]===','||i===dataBaseDaysString.length-1){
                    dataBaseDaysTable.push(dataBaseDaysString.slice(j,i+1));
                    j=i+2;
                }
            }

            dataBaseDaysTable.shift();

            j=0;

            let dataBaseEventsString = localStorage.getItem('event');
            let dataBaseEventsTable = [];

            for(let i=0;i<dataBaseEventsString.length;i++){
                if(dataBaseEventsString[i]===','){
                    commaChecker=true;
                    break;
                }else{
                    commaChecker=false;
                }
            }  

            if(commaChecker){
                dataBaseEventsTable.push(dataBaseEventsString.slice(0,dataBaseEventsString.length));
            }
            
            for(let i=0;i<dataBaseEventsString.length;i++){
                if(dataBaseEventsString[i+1]===','||i===dataBaseEventsString.length-1){
                    dataBaseEventsTable.push(dataBaseEventsString.slice(j,i+1));
                    j=i+2;
                }
            }
            dataBaseEventsTable.shift();

            j=0;

            let dataBaseHoursString = localStorage.getItem('hour');
            let dataBaseHoursTable = [];

            for(let i=0;i<dataBaseHoursString.length;i++){
                if(dataBaseHoursString[i]===','){
                    commaChecker=true;
                    break;
                }else{
                    commaChecker=false;
                }
            }  

            if(commaChecker){
                dataBaseHoursTable.push(dataBaseHoursString.slice(0,dataBaseHoursString.length));
            }
            
            for(let i=0;i<dataBaseHoursString.length;i++){
                if(dataBaseHoursString[i+1]===','||i===dataBaseHoursString.length-1){
                    dataBaseHoursTable.push(dataBaseHoursString.slice(j,i+1));
                    j=i+2;
                }
            }
            dataBaseHoursTable.shift();           

            this.setState({years: dataBaseYearsTable, months: dataBaseMonthsTable, days: dataBaseDaysTable, events: dataBaseEventsTable, hours: dataBaseHoursTable});

            let tempMonthsWithEvents=[];

            for(let i=0;i<dataBaseYearsTable.length;i++){
                if(dataBaseYearsTable[i]==this.props.year){
                    tempMonthsWithEvents.push(dataBaseMonthsTable[i]);
                }
            }
            
            this.setState({monthsWithEvents: tempMonthsWithEvents});
            
        }
        

    }

    changeAddYear(){
        let tempMonthsWithEvents=[];
        this.props.addingYear();
        if(localStorage.getItem('year')){

            for(let i=0;i<this.state.years.length;i++){
                if(this.state.years[i]==this.props.year+1){
                    tempMonthsWithEvents.push(this.state.months[i]);
                }
            }
            
            this.setState({monthsWithEvents: tempMonthsWithEvents});
        }
    }

    changeSubstractYear(){
        let tempMonthsWithEvents=[];
        this.props.substractingYear();
        if(localStorage.getItem('year')){

            for(let i=0;i<this.state.years.length;i++){
                if(this.state.years[i]==this.props.year-1){
                    tempMonthsWithEvents.push(this.state.months[i]);
                }
            }
            
            this.setState({monthsWithEvents: tempMonthsWithEvents});
        }
    }

    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return (
            <div>
                <h1>{this.props.year}</h1>
                <button onClick={this.changeSubstractYear}>w lewo</button>
                <button onClick={this.changeAddYear}>w prawo</button><br/>
                {months.map((month, index) =>{
                    for(let i=0;i<this.state.monthsWithEvents.length;i++){
                        if(index==this.state.monthsWithEvents[i]){
                            return <Square name={month} key={month} className="inYearWithEvent" display="month" /*clickFunction={this.clickOnMonth}*/ />
                        }
                    }
                    return <Square name={month} key={month} className="inYear" display="month" /*clickFunction={this.clickOnMonth}*/ />
                }
                    )}
            </div>
        )
    }
}

export default Year