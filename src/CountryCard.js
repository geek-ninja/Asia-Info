import React from 'react'
import './countrycard.css'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'

function CountryCard({country}) {

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);    
        const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          minWidth:200,
          minHeight:100,
          backgroundImage: 'linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);',
          border: '2px solid #ffff',
          borderRadius:'20px',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
          color:'black',
        },
    }));
    const classes = useStyles();
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    function getModalStyle() {
        const top = 50;
        const left = 50;
        const width = 20;
        return {
          top: `${top}%`,
          left: `${left}%`,
          width: `${width}vw`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    }
    
    const body = (
        <div style = {modalStyle} className = {classes.paper}>
            <div className = 'countryCard-detail'>
                <div className = "countryCard-left">
                    <img src = {country.flags[1]} alt = 'flag'/>
                    <p>Name :  {country.name.common}</p>
                    <p>Capital : {country.capital[0]}</p>
                    <p> Region : {country.region}</p>
                    <p> Subregion : {country.subregion}</p>
                </div>
                <div className = "countryCard-right">
                    <p>Borders :</p>
                    <ul>
                        {
                            country.borders? country.borders.map((border) => (<li>{border}</li>)):(<li>No borders</li>)
                        }
                    </ul>
                    <p>languages:</p>
                    <ul>
                    {
                        Object.entries(country.languages).map(([key,value])=> (<li>{value}</li>))
                    }
                    </ul>
                </div>
            </div>
        </div>
    );

    const countryDetail = (e) => {
        e.preventDefault();
        handleOpen();
    }
    return (
        <div className = 'countryCard'>
            <div className = 'countryCard-details'  onClick = {countryDetail}>
                <img src = {country.flags[1]} alt = 'flag'/>
                <p>{country.name.common}</p>
            </div>
            <Modal
            open={open}
            onClose={handleClose}
            >
            {body}
            </Modal>
        </div>
    )
}

export default CountryCard
