import React, {useEffect, useState} from 'react'
import QRCode from 'qrcode.react'
import {check} from '../firebase'

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
            <QRCode value={url} />

         :''}
           {status === false?   
           'go away'
         :''}
              {status === 'wait'?   
           'loading..'
         :''}
         
        </div>
    )
}

export default User
