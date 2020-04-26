import React, { Component } from 'react'
import {getUserInfo} from '../firebase'
import Loading from './Loading'

export default class Logedin extends Component {
    state = { 

    }
    render() {
        let user = getUserInfo()
        if(user && !this.state.user){
            this.setState( {

                user
            })            
        }
        return (
            <div>
                {this.state.user? 
                <> 
                {this.state.user.iscompany? '':''}
                </> 
                
                : <Loading />}
            </div>
        )
    }
}
