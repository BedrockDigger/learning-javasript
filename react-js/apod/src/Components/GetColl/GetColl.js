import React from 'react'
import { Grid } from 'semantic-ui-react'
import GenCard from '../GenCard/GenCard'
const axios = require('axios')

class GetColl extends React.Component {

    constructor(props) {
        super(props)
        this.state ={}
    }

    componentDidMount() {
        this.renderList()
    }

    renderList = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const photos = res.data
        this.setState({
            List: photos.map(function (it) {
                return <GenCard id={it.id} url={it.url} title={it.title}/>
            })
        })
    }

    render () {
        return (
            <Grid key={1}>
                {this.state.List}
            </Grid>
        )
    }
}

export default GetColl