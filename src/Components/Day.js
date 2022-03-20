import React from "react";
import Square from "./Square";
import Form from "./Form";

class Day extends React.Component{
    constructor(props){
        super(props);
        this.state={
            years: [],
            months: [],
            days: [],
            events: [],
            hours: [],
            hoursWithEvents: [],
            eventsInHours: [],
        }
        this.changeSubstractDay=this.changeSubstractDay.bind(this);
        this.changeAddDay=this.changeAddDay.bind(this);
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
                if(dataBaseMonthsString[i+1]===','||i===dataBaseMonthsString.length-1){
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

            let tempHoursWithEvents=[];
            let tempEventsInHours=[];

            for(let i=0;i<dataBaseYearsTable.length;i++){
                if(dataBaseYearsTable[i]==this.props.year&&dataBaseMonthsTable[i]==this.props.month&&dataBaseDaysTable[i]==this.props.day){
                    tempHoursWithEvents.push(dataBaseHoursTable[i]);
                    tempEventsInHours.push(dataBaseEventsTable[i]);
                }
            }
            
            this.setState({hoursWithEvents: tempHoursWithEvents, eventsInHours: tempEventsInHours});

        }
    }
    changeAddDay(){
        let tempHoursWithEvents=[];
        this.props.addingDay();
        if(localStorage.getItem('year')){
            for(let i=0;i<this.state.years.length;i++){
                if(this.props.day==this.props.amountOfDays){
                    if(this.props.month==11){
                        if(this.state.years[i]==this.props.year+1&&this.state.months[i]==0&&this.state.days[i]==1){
                            tempHoursWithEvents.push(this.state.hours[i]);
                        }
                    }else if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month+1&&this.state.days[i]==this.props.day+1){
                        tempHoursWithEvents.push(this.state.hours[i]);
                    }
                }else{
                    if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month&&this.props.day+1){
                        tempHoursWithEvents.push(this.state.hours[i]);
                    }
                }                    
            }
        this.setState({hoursWithEvents: tempHoursWithEvents});
        }
    }

    changeSubstractDay(){
        let tempHoursWithEvents=[];
        this.props.substractingDay();
        if(localStorage.getItem('year')){
            for(let i=0;i<this.state.years.length;i++){
                if(this.props.day==0){
                    if(this.props.month==0){
                        if(this.state.years[i]==this.props.year-1&&this.state.months[i]==11&&this.state.days[i]==31){
                            tempHoursWithEvents.push(this.state.hours[i]);
                        }
                    }else if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month-1&&this.state.days[i]==this.props.day-1){
                        tempHoursWithEvents.push(this.state.hours[i]);
                    }
                }else{
                    if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month&&this.props.day-1){
                        tempHoursWithEvents.push(this.state.hours[i]);
                    }
                }                    
            }
            this.setState({hoursWithEvents: tempHoursWithEvents});
        }
    }
    
    
    
    render(){
        let hours=[];
        for(let i=1;i<=24;i++){
            hours.push(i);
        }
        const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month=months[this.props.month];
        let year=this.props.year;
        let monthprops=this.props.month;
        let day = this.props.day;
        console.log(this.state.hoursWithEvents);
        return(
            <div>
                <h1>{this.props.year}-{month}-{this.props.day}</h1>
                <button onClick={this.changeSubstractDay}>w lewo</button>
                <button onClick={this.changeAddDay}>w prawo</button>
                {hours.map((hour) =>{
                    for(let i=0;i<this.state.hoursWithEvents.length;i++){
                        if(this.state.hoursWithEvents[i]==hour&&this.state.days[i]==this.props.day&&this.state.years[i]==this.props.year&&this.props.month==this.state.months[i]){
                            let hourText = hour.toString();
                            let tempText = (hourText.concat("\n",this.state.eventsInHours[i]));
                            return <Square name={tempText} key={hour} className="inDayWithEvent"/>;
                        }
                    }
                    return <Square name={hour} key={hour} className="inDay"/>;
                }
                )}
                <Form handleSubmit={this.handleSubmit} year={year} month={monthprops} day={day}/>
            </div>
        )
    }
}

export default Day