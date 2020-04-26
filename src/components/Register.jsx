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
            <Nav/>
            <div className="register" dir="rtl">
                {/* <div className="logo">

            <img src={logo} alt="logo"/>
                </div> */}
                <h1>Register as a {!this.state.iscompaney?'Driver': 'Company'}</h1>

            <div className="inputs">

                <input required onChange={this.onChange} placeholder="Email" type="email" name='email'/>
                {this.state.iscompaney?
                <input onChange={this.onChange} placeholder="إسم الشركة" type="text" name="إسم الشركة" />:
                <input onChange={this.onChange} placeholder="الإسم كامل" type="text" name="الإسم كامل" />}
                <input onChange={this.onChange} placeholder="الرقم السري " type="password" name="الرقم السري"/>
                <input onChange={this.onChange} placeholder="إعادة إدخال الرقم السري " type="password" name="إعادة إدخال الرقم السري"/>
                <div className="submit">

                <button onClick={this.onSubmit} type="submit" >إرسال</button>
</div>
            <a onClick={()=> this.setState({iscompaney:!this.state.iscompaney})} >or register as a {this.state.iscompaney?'Driver': 'Company'}</a>
            </div>

            </div>
        </>
        )
    }
}
