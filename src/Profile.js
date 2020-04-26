import React, { Component } from 'react'
import { Button, Checkbox,Form, Input, Radio, Select, TextArea,} from 'semantic-ui-react'
import './Profile.css'
import Nav from './Nav'



class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
        
        <div className="profile">

      <Form>
        <Form.Group widths='equal'>
          <Form.Field inline style={{width:'110%' , margin: '0 auto', paddingtop:'50px', borderradius:'100px' , border:'solid 1px#70B0B5', padding:'1px'
          , border: 'none'}}
            control={Input}
            label='اسم السائق'
            placeholder='اسم السائق'
          />
          <Form.Field inline style={{width:'110%' , margin: '2% auto', paddingtop:'50px'}}
            control={Input}
            label='اسم صاحب الشحنة'
            placeholder='اسم صاحب الشحنة'
          />
          
        </Form.Group>
        <Form.Group inline style={{width:'110%' , margin: '2% auto', paddingtop:'50px'}}>
          <label> إسم الشركة </label>
          <Form.Field inline style={{width:'90%' , margin: '2% auto', paddingtop:'50px'}}
            control={Radio}
            label='Fedex'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field inline style={{width:'90%' , margin: '2% auto', paddingtop:'50px'}}
            control={Radio}
            label='Aramex'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field inline style={{width:'90%' , margin: '2% auto', paddingtop:'50px'}}
            control={Radio}
            label='Zajil'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field inline style={{width:'110%' , margin: '3% auto', paddingtop:'50px'}}
          control={TextArea}
          label='رابط الباركود'
          placeholder='...........'
        />
        <Form.Field
          control={Checkbox}
          label='أتعهد بأن أوصلها بشكل آمن'
        />
         
    
 <Form.Field inline style={{width:'50%' , margin: '0 auto', paddingtop:'50px'}}
            onClick={this.onSubmit} control={Button}>Submit</Form.Field>
       
       </Form>
       </div>
     
     
    )
  }
}

export default FormExampleFieldControl