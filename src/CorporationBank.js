import React,{Component} from 'react'



class CorporationBank extends Component{
    render(props){
        return (
            <div>
                <h4>This is {this.props.bankname} which is located @ {this.props.location}</h4>
            </div>
        )
    }
}

export default CorporationBank;