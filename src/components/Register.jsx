import React, { Component } from 'react'
import './css/register.scss'
import Nav from '../Nav'
import logo from '../images/logo.jpeg'
import Swal from 'sweetalert2'
import {createUser} from '../firebase'



export default class Register extends Component {
    state ={ 
        iscompaney: false
    }
    onChange = (e)=> {
        this.setState({

            [e.target.name]:e.target.value
        })
    }
    onSubmit =  () => {
        if(this.state.email && this.state.password && this.state.password2 && (this.state.fullname || this.state.companyName)){ 
            if(this.state.password === this.state.password2) {
             createUser(this.state, this.props.history)
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'passwords does not match',
                  })  
            }
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
            <Nav {...this.props} />
            <div className="register" >
                {/* <div className="logo">

            <img src={logo} alt="logo"/>
                </div> */}
                <h1>Register as a {!this.state.iscompaney?'Driver': 'Company'}</h1>

            <div className="inputs">

                <input required onChange={this.onChange} placeholder="Email" type="email" name='email'/>
                {this.state.iscompaney?
                <input onChange={this.onChange} placeholder="Name of institution" type="text" name="companyName" />:
                <input onChange={this.onChange} placeholder="Fullname" type="text" name="fullname" />}
                <input onChange={this.onChange} placeholder="Password" type="password" name="password"/>
                <input onChange={this.onChange} placeholder="repeat password" type="password" name="password2"/>
                <div className="submit">

                <button onClick={this.onSubmit} type="submit" >Submit</button>
</div>
            <a onClick={()=> this.setState({iscompaney:!this.state.iscompaney})} >or register as a {this.state.iscompaney?'Driver': 'Company'}</a>
            </div>

            </div>
        </>
        )
    }
}
