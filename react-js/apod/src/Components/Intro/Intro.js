import React from 'react'
import { Header, Container } from 'semantic-ui-react'

class Intro extends React.Component {
    render() {
        return (
            <Container text textAlign='justified' style={{padding: '20px'}}>
                <Header as='h2' icon='star outline' content=' Astronomy Picture of the Day' />
                <p>One of the most popular websites at NASA is the Astronomy Picture of the Day. In fact, this website is one of the most popular websites across all federal agencies. It has the popular appeal of a Justin Bieber video.</p>
            </Container>
        )
    }
}

export default Intro