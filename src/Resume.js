
import React,{Component} from 'react'
import data from './data.json';



class Resume extends Component{
    render(){
        var pskillsnames = data.professionalskills
        var personal = data.personalskills
        var pskills = pskillsnames.map(function(name){
            return <li className='text-left border'>{name}</li>;
        })
        var perskill = personal.map(function(name){
            return <li className='text-left'>{name}</li>
        })

        return (
            <div className='container'>
                <div className='container-fulid'>
                    <div className='left'>
                        <div className='row'>
                            <div  className='card col-md-3 mt-4' style={{width:'18rem',backgroundColor:'#ebe2e24d',textAlign:'center'}}>
                                <a class="navbar-brand" href="">
                                    <img src={process.env.PUBLIC_URL+'./logo512.png'} style={{width:'140px'}} className="card-img-top border border-info rounded-circle"/>
                                </a>
                                <h4 className='text-left'>{data.name} </h4>
                                <h6 className='text-left'>{data.profession} </h6>
                                <div className='row'>
                                    <h6 className='text-left'>Professional Skills :</h6>
                                </div>
                                
                                <ul className='list-unstyled'>
                                    { pskills }
                                </ul>
                                <h6 className='text-left'>Personal Skills :</h6>
                                <ul> 
                                    { perskill } 
                                </ul>
                            </div>
                            <div className='col-md-1 mt-4'></div>
                            <div  className='card col-md-8 mt-4' style={{width:'18rem',backgroundColor:'#ebe2e24d',textAlign:'center',height:'480px'}}>
                                <div className='row ml-2 mt-2' style={{height:'490px',position:'absolute',overflowX:'hidden'}} >
                                    <div>
                                        <h6 className='text-left'>Carrier Objective :</h6>
                                        <p className='text-left'>{data.carrier} </p>
                                    </div>
                                    <h6 className='text-left'>Education :</h6>
                                    <table className='table'>
                                        <tr>
                                            <th>S.No</th>
                                            <th>School/College</th>
                                            <th>CGPA/PER</th>
                                            <th>Duration</th>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[0].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[0].institute}</td>
                                            <td>{data.EducationDetails[0].percentage}</td>
                                            <td>{data.EducationDetails[0].duration}</td>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[1].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[1].institute}</td>
                                            <td>{data.EducationDetails[1].percentage}</td>
                                            <td>{data.EducationDetails[1].duration}</td>
                                        </tr>
                                        <tr>
                                            <td>{data.EducationDetails[2].sno}</td>
                                            <td className='text-left'>{data.EducationDetails[2].institute}</td>
                                            <td>{data.EducationDetails[2].percentage}</td>
                                            <td>{data.EducationDetails[2].duration}</td>
                                        </tr>
                                    </table>
                                    <div>
                                        <h6 className='text-left'>Contact Details :</h6>
                                        <div>
                                            <p className='text-left'>{data.phn} </p>
                                            <p className='text-left'>{data.email} </p>
                                            <p className='text-left'>{data.address.street} </p>
                                            <p className='text-left'>{data.address.mandal} </p>
                                            <p className='text-left'>{data.address.dist} </p>
                                            <p className='text-left'>{data.address.state} </p>
                                            <p className='text-left'>{data.address.pincode} </p>
                                        </div>

                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;