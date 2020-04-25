import React, { Component } from 'react'
import App from './App'
import Contact from './images/Contact.jpeg'
import './Contactus.css';






class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div  dir="rtl">
                <img src={Contact} style={{ width: "800px" }} />

                <div className="Contact" >
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">

                      
                            <label htmlFor="name" className="margin1">الإسم</label>
                            <input type="text" className="form-control" placeholder="الإسم" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                            <label htmlFor="exampleInputEmail1" className="margin1">البريد الإلكتروني</label>
                            <input type="email" className="form-controll" aria-describedby="emailHelp" placeholder=" بريدك الإلكتروني " value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                            
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="message" className="margin1">أكتب رسالتك </label>
                            <textarea className="form-control" placeholder="أكتب رسالتك هنا.. "  style={{}}value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                        </div>
                        <button type="submit" className=" btn-primary" >إرسال</button>
                    </form>
                </div>
                
            </div>
            
        );
        
    }

    onNameChange(event) {
        this.setState({ name: event.target.value })
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    handleSubmit(event) {
    }

    
}


export default Contactus;
