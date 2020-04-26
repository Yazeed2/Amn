import React, { Component } from 'react'
import { Button, Checkbox,Form, Input, Radio, Select, TextArea,} from 'semantic-ui-react'
import './Profile.css'
import Nav from './Nav'
import {createUrl} from './firebase'
import Swal from 'sweetalert2'
import Loading from './components/Loading'


class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e)=> { 
    this.setState({[e.target.name]: e.target.value})
  
    
  }
  onSubmit = ()=> { 
    if(this.state.email && this.state.name){ 
      this.setState({waiting:true})
      createUrl(this.state.email, this.state.name, this.addId)
    }else{ 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to fill all the inputs first',
      })
    }
  }
  addId = (id)=> {
    let url = window.location.href
    url = url.split('/logedin')
    console.log(url);
    id = url[0] + '/user/'+id
    this.setState({waiting:false, id:id})
  }
  render() {
    const { value } = this.state
    return (
        <>
        {!this.state.waiting?
        
        <div className="profile">
          {this.state.id? 
           <div className='thiss'>
           <h1 className="send">send this url to client</h1><br/>
    <input className="url" value={this.state.id} type="text"/> 
    </div>
:
          
          
      <Form>
        <Form.Group widths='equal'>
          <Form.Field inline style={{width:'110%' , margin: '0 auto', paddingtop:'50px', borderradius:'100px' , border:'solid 1px#70B0B5', padding:'1px'
          , border: 'none'}}
            control={Input}
            label='اسم السائق'
            placeholder='اسم السائق'
            name="email"
            onChange={this.handleChange}

          />
          <Form.Field inline style={{width:'110%' , margin: '2% auto', paddingtop:'50px'}}
            control={Input}
            label='اسم صاحب الشحنة'
            placeholder='اسم صاحب الشحنة'
            onChange={this.handleChange}
            name="name"
            
          />
          
        </Form.Group>
    
        <Form.Field
          control={Checkbox}
          label='أتعهد بأن أوصلها بشكل آمن'
        />
         
    
 <Form.Field inline style={{fontSize:'20px', width:'50%' , margin: '30px auto', paddingtop:'50px'}}
            onClick={this.onSubmit} control={Button}>Submit</Form.Field>
       
       </Form>}
        </div>

       :<Loading/>}
     </>
     
    )
  }
}

export default FormExampleFieldControl