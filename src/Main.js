
import React,{Component} from 'react'
import './bootstrap/css/bootstrap.min.css';
import logo1 from './logo192.png';
import data from './data.json';
import Resume from './Resume.js';
import {BrowserRouter,Route,Link} from 'react-router-dom';


class Main extends Component{
    render(){
        return (
            <BrowserRouter>
                <Route exact path='/' component={Main1} />
                <Route exact path='/aboutresume' component={Resume} />
            </BrowserRouter>
        )
    }
    
}


function Main1() {
    return (
        <div className='row'>
            <div className='card col-md-4 offset-4 mt-4' style={{width:'18rem',textAlign:'center'}}>
                {/* <img src={logo1} className='card-img-top' /> */}
                <img src={process.env.PUBLIC_URL+'./logo512.png'} className="card-img-top"/>
                <h2>{data.name} </h2>
                <h6>{data.email} </h6>
                <Link to='/aboutresume' className='btn btn-primary' >Click</Link>
            </div>
        </div>
    )

}

export default Main;