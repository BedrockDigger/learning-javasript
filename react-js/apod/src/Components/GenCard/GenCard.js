import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class GenCard extends React.Component {
    render() {
        const p = this.props
        return <Card>
            <Image src={p.url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>No.{p.id}</Card.Header>
                <Card.Description>{p.title}</Card.Description>
            </Card.Content>
        </Card>
    }
}

export default GenCard