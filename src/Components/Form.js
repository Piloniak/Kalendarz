import React from "react";

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div>
                <form>
                    <label>
                        Notatka:
                        <textarea></textarea>
                        <input type="submit" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }

}

export default Form