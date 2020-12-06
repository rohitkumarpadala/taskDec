import React from 'react';


function Admin(){
    return <div>
        <h1>ADMIN</h1>
        <Main />
        </div>
}


class Main extends React.Component{
    render(){
        return <h4>Main Component</h4>
    }
}


export default Admin;