import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
import {check} from '../firebase'
import Loading from './Loading'

function User({history, match}) {

    const [status, setStatus] = useState('wait')
    let url = window.location.href
    url = url.split('user')
    url = url[0]
    url += 'driver/'+match.params.id

    useEffect(() => {
        
 
    }, [])
    let checking = check(match.params.id , setStatus)
  
    return (

        <div style={{margin:'100px'}}>
         {status === true? 
            <QRCode value={url} style={{width:'50%', height:"auto"}}/>
         :''}
           {status === false?   
           'not Found'
         :''}
              {status === 'wait'?   
           <Loading/>
         :''}
         
        </div>
    )
}

export default User
