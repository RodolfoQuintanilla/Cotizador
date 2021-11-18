import React from 'react';
import { primeraMayuscula } from '../helper';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838f;
color: #FFF;
margin-top:1rem;
`;

const Resumen = ({ datos }) => {

    //const [state, setstate] = useState(initialState);
    const { marca, year, plan } = datos;

    if (marca === '' || year === '' || plan === '') {
        return null;
    }


    return (

        <ContenedorResumen>
            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Marca: {primeraMayuscula(marca)} </li>
                <li>Año: {primeraMayuscula(year)}</li>
                <li>Marca: {primeraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>

    );

};

Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}


export default Resumen;