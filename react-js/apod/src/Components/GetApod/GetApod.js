import React from 'react'
import { Grid } from 'semantic-ui-react'
import GenApod from '../GenApod/GenApod'
import calcFtrDate from './calcFtrDate'
const axios = require('axios')

class GetApod extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.renderList()
    }

    renderList = async () => {
        var apodList = []
        var res
        var apodObj
        for (var ii = 0; ii < 12; ii++) {
            res = await axios.get(
                'https://api.nasa.gov/planetary/apod', {
                params: {
                    api_key: 'lwB2z1ilFDNecSn5dhp8R6VBxRghVHNs9pAsa9rA',
                    date: calcFtrDate(-ii)
                }
            }
            )
            apodObj = res.data
            apodList.push(apodObj)
        }

        this.setState({
            ApodListEl: apodList.map(function (it) {
                return <GenApod object={it}/>
            })
        })
    }

    render() {
        return (
            <Grid>
                {this.state.ApodListEl}
            </Grid>
        )
    }
}

export default GetApod