import React from 'react';



class Bank extends React.Component {
    render(){
        return (<div>
            <h1>This is class Component</h1>
            
            <Bank2 />
            </div>)
    }


}

function Bank2(){
    return (
    <div>
        <h1>This is function comp in class comp</h1>
    </div>
    )
}

export default Bank;
