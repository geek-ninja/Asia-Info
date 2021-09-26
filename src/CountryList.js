import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './countrylist.css'
import CountryCard from './CountryCard';
import Button from '@material-ui/core/Button';

function CountryList() {

    const [countries,setCountries] = useState([])
    const [loadingData, setLoadingData] = useState(false);

    useEffect(() => {
        axios.get('https://restcountries.com/v3/region/asia').then((data) => {
            setCountries(data.data)
        })
    }, [])

    const refresh = async () => {
        setLoadingData(true);
        const response = await fetch("https://restcountries.com/v3/region/asia");
        const data = await response.json();
        console.log(data);
        setCountries(data);
        setLoadingData(false);
    };

    return (
        <div className = 'countrylist'>
            <div className = 'list'>
            {
                countries.map((country) => (
                    <CountryCard country = {country}/>
                ))
            }
            </div>
            <div className = 'country-refresh'>
            {!loadingData && <Button variant="contained" color="secondary" onClick = {refresh}><strong>Refresh Data</strong></Button>}
            {loadingData && <strong><span>Loading...</span></strong>}
            </div>
        </div>
    )
}

export default CountryList
