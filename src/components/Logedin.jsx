import React, { Component } from 'react'
import {getUserInfo, auth} from '../firebase'
import Loading from './Loading'
import Profile from '../Profile'
import scan from '../images/qrcodes.jpg'
import './css/scan.scss'
export default class Logedin extends Component {
    state = { 

    
    }
   set = user => {
       this.setState({user})
       console.log('sup');
       console.log(user);
       
       
   }
    componentDidMount(){
        auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                console.log(userAuth);
                getUserInfo(userAuth.uid, this.set)
            }
        })
}
    render() {


        
        return (
            <div>
                {this.state.user? 
                <> 
                {this.state.user.iscompaney? <Profile/> : <div className="scan">

                    <img src={scan} alt=""/>
                    <h1>You can safley scan now!</h1>
                </div> }
                </> 
                
                : <Loading />}
            </div>
        )
    }
}
