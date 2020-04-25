import React, { Component } from 'react'
import { Button, Checkbox,Form, Input, Radio, Select, TextArea,} from 'semantic-ui-react'
import './Profile.css'

const options = [
  { key: 'f', text: 'Fedex', value: 'Fedex' },
  { key: 'a', text: 'Aramex', value: 'Aramex' },
  { key: 'z', text: 'Zajil', value: 'Zajil' },
]

class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='اسم السائق'
            placeholder='اسم السائق'
          />
          <Form.Field
            control={Input}
            label='اسم صاحب الشحنة'
            placeholder='اسم صاحب الشحنة'
          />
          <Form.Field
            control={Select}
            label='اسم الشركة'
            options={options}
            placeholder='اسم الشركة'
          />
        </Form.Group>
        <Form.Group inline>
          <label>عدد الشحنات</label>
          <Form.Field
            control={Radio}
            label='واحدة'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='اثنتان'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='ثلاثة'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='رابط الباركود'
          placeholder='...........'
        />
        <Form.Field
          control={Checkbox}
          label='أتعهد بأن أوصلها بشكل آمن'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    )
  }
}

export default FormExampleFieldControl