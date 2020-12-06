
import React,{Component} from 'react';


class Score extends Component{
    constructor(){
        super();
        this.state={Result:0}
    }

    changeData=()=>{
        // var x = Result+1;
        this.setState({Result:this.state.Result+1})
    }

// emp1={name:'ganesh'};
    render(){

        return (
            <div>
                    <h4> Score : {this.state.Result}</h4>
                <button onClick={this.changeData}>Update</button>

            </div>
        )
    }
}

export default Score;