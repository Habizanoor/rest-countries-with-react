import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props.country)
    return (
        <div className='country'>
            <h2>Country Name: {props.name}</h2>
            <p>Capital:{props.capital}</p>
            {/* Pass multiple data to a child component */}
            <p>Area:{props.country.area}</p>
            <p>Population:{props.country.population}</p>
            {/* <img>{props.country.flags.png}</img> */}
            <img src={props.country.flags.png} alt="" />
        </div>
    );
};

export default Country;