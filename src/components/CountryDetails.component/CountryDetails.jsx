import React from 'react';
import {WithRouter} from 'react-router-dom'

 function CountryDetails(props){

    console.log('Countrydetails', props)
    return (
        <div>Hello</div>
    )
}

export default WithRouter(CountryDetails)