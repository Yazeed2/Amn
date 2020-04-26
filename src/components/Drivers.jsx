import React, {useState, useEffect} from 'react'
import {getData, auth, getUserInfo} from '../firebase'
import Swal from 'sweetalert2'
import Loading from './Loading'

export default function Drivers({match}) {

    const [data, setData] = useState('wait')
    const [som, some] = useState(true)
    const [user, setUser] = useState()
    getData(match.params.id, setData)
    let done = (name)=> {
   
    }
   
    if(data.name &&  som){
        Swal.fire(
            'customer name',
            data.name,
            'success'
          )
          some(false)
    }
    useEffect(() => {
      auth.onAuthStateChanged(async userAuth => {
          if(userAuth){
              console.log(userAuth);
              getUserInfo(userAuth.uid, setUser )
          }
        })
  }, [])
    return (
        <div>
          {user?
       
       <>

           {data === false?   
           'not found'
         :''}
              {data === 'wait'?   
         <Loading />
         :''}
         </>: <Loading /> }
        </div>
    )
}