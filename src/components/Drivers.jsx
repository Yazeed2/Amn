import React, {useState} from 'react'
import {getData} from '../firebase'
import Swal from 'sweetalert2'


export default function Drivers({match}) {
    const [data, setData] = useState('wait')
    const [som, some] = useState(true)
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
    return (
        <div>
       
           {data === false?   
           'go away'
         :''}
              {data === 'wait'?   
           'loading..'
         :''}
        </div>
    )
}
