import React, { Component } from 'react'
import { Input, Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { scroller } from 'react-scroll';



export default class Nav extends Component {
    render() {
        return (
            <div>
                <div class="topnav">
                <a  class="active" href="#Sign">تسجيل الدخول </a>
                    <a href="#Signup">تسجيل جديد</a>
                    <a href="#about">تواصل معنا </a>
                    <a href="#news">من نحن </a>
                    <a href="#contact">الأسئلة الشائعة</a>
                    <a href="#profile">صفحة المستخدم </a>
               
                 
                    <a  href="#home" > الصفحة الرئيسية </a>
                </div>
            </div>
        )
    }
}
