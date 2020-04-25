import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { scroller } from 'react-scroll';



export default class Nav extends Component {
    go = (url)=> { 
        this.props.history.push(url)
    }
    
    render() {
        console.log(this.props);

        return (
            <div>
                <div class="topnav">
                <a  class="active" onClick={()=> this.go('/login')}>تسجيل الدخول </a>
                    <a onClick={()=> this.go('/register')}>تسجيل جديد</a>
                    <a href="#about">تواصل معنا </a>
                    <a href="#news">من نحن </a>
                    <a href="#contact">الأسئلة الشائعة</a>
               
                 
                    <a  href="#home" > الصفحة الرئيسية </a>
                </div>
            </div>
        )
    }
}
