
import React,{Component} from 'react';


class Employee extends Component{
    constructor(){
        super();
        this.state={name:'Rohit'};
    }
// emp1={name:'ganesh'};
    render(){
        setTimeout(()=>this.setState({name:'P.Rohit'}),1000)


        return (
            <div>
                <h4> Employee name : {this.state.name} </h4>
                {/* <h4> Employee 2 : {this.emp1.name} </h4> */}
            </div>
        )
    }
}

export default Employee;