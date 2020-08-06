import React from 'react'
import { Card } from 'semantic-ui-react'

class GenApod extends React.Component {
    render() {
        const obj = this.props.object
        return (
            <Card
                image={obj.url}
                header={obj.title}
                meta={obj.date}
                description={obj.explanation}
                extra={obj.copyright}
                style={{margin: '20px'}}
            />
        )
    }
}

export default GenApod