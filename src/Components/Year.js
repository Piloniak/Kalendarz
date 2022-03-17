import React from "react";
import Square from "./Square";
import "./components.css";

class Year extends React.Component {

    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        return (
            <div>
                <h1>{this.props.year}</h1>
                <button onClick={() => this.props.changingYear(-1)}>w lewo</button>
                <button onClick={() => this.props.changingYear(1)}>w prawo</button>
                {months.map((month) =>
                    <Square name={month} key={month} className="inYear" />)}
            </div>
        )
    }
}

export default Year