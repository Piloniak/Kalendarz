import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:"Tu wpisz opis wydarzenia",
            years: [],
            months: [],
            days: [],
            events: [],
            hours: [],
            dataBasetext:"",
            hour: 1,
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSelectChange=this.handleSelectChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({text: event.target.value});
    }

    handleSelectChange(e){
        this.setState({ hour: e.target.value })
    }
    handleSubmit(){
        let years=this.state.years;
        years.push(this.props.year);
        this.setState({years: years});

        let months=this.state.months;
        months.push(this.props.month);
        this.setState({months: months});

        let days=this.state.days;
        days.push(this.props.day);
        this.setState({days: days});

        let events= this.state.events;
        events.push(this.state.text);
        this.setState({events: events});

        let hours = this.state.hours;
        hours.push(this.state.hour);
        this.setState({hours: hours});
        
        localStorage.setItem('year',years);
        localStorage.setItem('month',months);
        localStorage.setItem('day',days);
        localStorage.setItem('event',events);
        localStorage.setItem('hour',hours);
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

            this.setState({years: dataBaseYearsTable, months: dataBaseMonthsTable, days: dataBaseDaysTable, events: dataBaseEventsTable, hours: dataBaseHoursTable});

        }
        

    }
    
    
    
    render()
    {

        const hours=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
        
        return(
            <div>
                <form >
                    <label>
                        Notatka:
                        <textarea value={this.state.text} onChange={this.handleChange}></textarea>
                        <select value={this.state.hour} onChange={this.handleSelectChange} id="hour">
                            {hours.map((hour)=>(
                            <option value={hour} key={hour}>{hour}</option>))}
                        </select>
                        <input type="submit" value="click" onClick={this.handleSubmit}/>
                    </label>
                </form>
            </div>
        )
    }

}

export default Form