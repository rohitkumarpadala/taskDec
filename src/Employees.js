
import React,{Component} from 'react';


class Employees extends Component{
    constructor(){
        super();
        this.state={
            Users:[
                {name:'Rohit',designation:'jr Developer'},
                {name:'Shyam',designation:'jr Developer'},
                {name:'Shnamu',designation:'Air Force'},
            ]
        }
    }

    changeData=()=>{
        this.setState({
            Users:[
                {name:'P.Rohit',designation:'jr Developer'},
                {name:'K.Shyam',designation:'jr Developer'},
                {name:'K.Shnamu',designation:'Air Force'},
            ]
        })
    }

// emp1={name:'ganesh'};
    render(){

        return (
            <div>
                {/* for(i=0;i<length.Users;i++){ */}
                    <h4> Employee name : {this.state.Users[0].name} with designation of {this.state.Users[0].designation}</h4>
                    <h4> Employee name : {this.state.Users[1].name} with designation of {this.state.Users[1].designation}</h4>
                    <h4> Employee name : {this.state.Users[2].name} with designation of {this.state.Users[2].designation}</h4>
                {/* } */}
                {/* <h4> Employee 2 : {this.emp1.name} </h4> */}
                <button onClick={this.changeData}>Update</button>

            </div>
        )
    }
}

export default Employees;