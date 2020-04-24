import React, { Component } from 'react'
import { Input, Menu, Container, Grid, GridRow } from 'semantic-ui-react'
//import "semantic-ui-css/semantic.min.css"
import App from './App'
import logo from './images/logo.jpeg'
import Video from './images/Video.jpeg'
import photo from './images/photo.jpeg'






export default class Home extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div>




                <Container className='a'>
                    <Grid columns={2} divided reversed='mobile'>
                        <Grid.Row>

                            <Grid.Column>

                            <img src={logo} />
                            </Grid.Column>


                            <Grid.Column>

                           
                                <p>
                                    <h1>لأننا نهتم بأن تصلك شٌحنتك <br /> بشكل آمن</h1>

                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <img src={Video} />



                    <img src={photo}  style={{mrginRight:'40%'}}/>


                </Container>

                <Container>

                    
                </Container>

            </div>
        )
    }
}
