import React, { Component } from 'react'
import './css/register.scss'
import Nav from '../Nav'
import logo from '../images/logo.jpeg'
import Swal from 'sweetalert2'
import {loginUser} from '../firebase'



export default class Register extends Component {
    state ={}
    onChange = (e)=> {
        this.setState({

            [e.target.name]:e.target.value
        })
    }
    onSubmit =  () => {
        if(this.state.email && this.state.password){ 
      
             loginUser(this.state, this.props.history)
        
           
            
        }else{ 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to fill all the inputs first',
              })
        }
    }
    render() {
        
        return (
            <>
            <Nav {...this.props}/>
            <div className="register" >
                {/* <div className="logo">

            <img src={logo} alt="logo"/>
                </div> */}
                <h1>Login</h1>

            <div className="inputs">

                <input required onChange={this.onChange} placeholder="Email" type="email" name='email'/>
                <input onChange={this.onChange} placeholder="Password" type="password" name="password"/>
                <div className="submit">

                <button onClick={this.onSubmit} type="submit" >Login</button>
</div>
            </div>

            </div>
        </>
        )
    }
}
