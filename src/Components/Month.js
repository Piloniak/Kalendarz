import React from "react";
import Square from "./Square";

class Month extends React.Component{
    constructor(props){
        super(props);
        this.state={
            years: [],
            months: [],
            days: [],
            events: [],
            hours: [],
            daysWithEvents: [],
        }

        this.changeAddMonth=this.changeAddMonth.bind(this);
        this.changeSubstractMonth=this.changeSubstractMonth.bind(this);
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
            //console.log(dataBaseMonthsTable)

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
            //console.log(dataBaseDaysTable)
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
            //console.log(dataBaseHoursTable);

            this.setState({years: dataBaseYearsTable, months: dataBaseMonthsTable, days: dataBaseDaysTable, events: dataBaseEventsTable, hours: dataBaseHoursTable});

            let tempDaysWithEvents=[];

            for(let i=0;i<dataBaseYearsTable.length;i++){
                if(dataBaseYearsTable[i]==this.props.year&&dataBaseMonthsTable[i]==this.props.month){
                    tempDaysWithEvents.push(dataBaseDaysTable[i]);
                }
            }
            
            this.setState({daysWithEvents: tempDaysWithEvents});

        }
        

    }

    changeAddMonth(){
        let tempDaysWithEvents=[];
        this.props.addingMonth();
        if(localStorage.getItem('year')){
            for(let i=0;i<this.state.years.length;i++){
                if(this.props.month==11){
                    if(this.state.years[i]==this.props.year+1&&this.state.months[i]==0){
                        tempDaysWithEvents.push(this.state.days[i]);
                    }
                }else
                if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month+1){
                    tempDaysWithEvents.push(this.state.days[i]);
                }
            }
            
            this.setState({daysWithEvents: tempDaysWithEvents});
        }

            

    }

    changeSubstractMonth(){
        let tempDaysWithEvents=[];
        this.props.substractingMonth();
        if(localStorage.getItem('year')){
            for(let i=0;i<this.state.years.length;i++){
                if(this.props.month==0){
                    if(this.state.years[i]==this.props.year-1&&this.state.months[i]==11){
                        tempDaysWithEvents.push(this.state.days[i]);
                    }
                }else
                if(this.state.years[i]==this.props.year&&this.state.months[i]==this.props.month-1){
                    tempDaysWithEvents.push(this.state.days[i]);
                }
            }
            
            this.setState({daysWithEvents: tempDaysWithEvents});
        }

    }
    
    render(){
        let days=[];
        for(let i=1;i<=this.props.amountOfDays;i++){
            days.push(i);
        }

        let blankDays=[];
        for(let i=0;i<this.props.weekDay;i++){
            blankDays.push(i);
        }



        const weekDays=blankDays.map((index) =>
            <Square name=" " key={index} className="inMonth"/>);
        
        const daysMonth=days.map((day) =>{
            for(let i=0;i<this.state.daysWithEvents.length;i++){
                if(day==this.state.daysWithEvents[i]){
                    return <Square name={day} key={day} className="inMonthWithEvent"/>
                }
            }
                return <Square name={day} key={day} className="inMonth"/>
            }
           
        ) 
            
            
            

        const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let month=months[this.props.month];

        return(
            <div>
                <h1>{this.props.year} - {month}</h1>
                <button onClick={this.changeSubstractMonth}>w lewo</button>
                <button onClick={this.changeAddMonth}>w prawo</button>
                <div className="daysOfMonth">
                    {weekDays}
                    {daysMonth}
                </div>
            </div>
        )
    }
}

export default Month