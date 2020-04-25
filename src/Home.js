import React, { Component } from 'react'
import { Input, Menu, Container, Grid, GridRow } from 'semantic-ui-react'
//import "semantic-ui-css/semantic.min.css"
import App from './App'
import logo1 from './images/logo1.jpeg'
import Video from './images/Video.jpeg'
import photo from './images/photo.jpeg'
import a from './images/a.jpeg'






export default class Home extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>




                <Container className='a' >
                    <div className="logos">

                        <img src={a} style={{marginTop:'60%'}}/>

                        <img src={logo1} />
                        <div>
                            <button class="button" style={{ marginLeft: '30%' }}>شاهد الفديو</button>
                            <button class="button" style={{ marginRight: '0%', }}>  إنضم لنا </button>
                        </div>
                    </div>
                    <img src={Video} style={{ width: '1000x', marginLeft: '12%' }} />


                    <div style={{ width: "fit-content", marginLeft: "-90px" }}>
                        <img src={photo} style={{width:'600px', hight: '600px'}}  />
                    </div>

                </Container>

                <Container>


                </Container>

            </div>
        )
    }
}
