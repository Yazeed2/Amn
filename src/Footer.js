import App from './App'
import React, { Component, Row, Col } from 'react'
import { Input, Menu, Container, Grid, Icon } from 'semantic-ui-react'
import logo from './images/logo.jpeg'
import log from './images/log.jpeg'




export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer className="footer1" id="footer">
                    <Container >
                        <Grid columns={3} divided reversed='mobile'>
                            <Grid.Row>
                                <Grid.Column>

                                    <img src={log} style={{width:'200px',height:'200px' ,margin:'center'}}/>
                                </Grid.Column>
            
                                <Grid.Column>
                                    <div className="Contact" style={{marginRight:'5%'}}>
                                        <ul>
                                          
                          
                                          
                                            <ol >  Phone: +96655555555 </ol>
                                            <br />
                                            <ol> <a href=''>Support@amn.com</a> </ol>
                                        </ul>
                                    </div>
                                </Grid.Column>


{/* 
                                <Grid.Column>
                                    <div className="Social">
                                        <ul>
                                            <ol>  <h2>Social</h2></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='facebook' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='twitter' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='instagram' size='big' /> </a></ol>
                                            <br />
                                            <ol><a href=''> <Icon disabled name='youtube' size='big' /> </a></ol>

                                        </ul>
                                    </div>
                                </Grid.Column> */}

                            </Grid.Row>

                        </Grid>
                        <br />
                        <br />
                        <Grid.Row>

                            <Grid.Column className="u">  {'Copyright © '} @2020 Amn All Rights Reversed. </Grid.Column>

                        </Grid.Row>
                        <br />
                    </Container>
                </footer>
            </div>
        )
    }
}
