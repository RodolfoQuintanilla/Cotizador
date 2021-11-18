import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { calcularmarca, obtenerDiferenciaYear, obtenerPlan } from '../helper';
import PropTypes from 'prop-types';

const Campo = styled.div`
 display:flex;
 margin-bottom: 1rem;
 align-items: center;
`;

const Label = styled.label`
flex: 0 0 100;
`;

const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border:1px solid #e1e1e1;
--webkit-appearance: none;
`;

const InpitRadio = styled.input`
margin: 0 1rem;
`;

const Boton = styled.button`
background-color: #00838F;
font-size:16px ;
width: 100%;
padding: 1rem;
text-transform: uppercase;
font-weight:bold;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover{
    background-color: #26c6da;
    cursor: pointer;
}
`;

const Error = styled.div`
background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ({ guardarResumen, guardarCargando }) => {

    const [datos, guardarDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);

    //extraer los valores del state
    const { marca, year, plan } = datos;

    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos, [e.target.name]: e.target.value
        });
    };

    //Cuando el usuario preciona submit
    const cotizarSeguro = (e) => {
        e.preventDefault();

        if (marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        //Base= 2000
        let resultado = 2000;

        //Obtener la diferencia
        const diferencia = obtenerDiferenciaYear(year);



        //por cada año hay q restar el 3%
        resultado -= ((diferencia) * resultado) / 100;
        console.log(resultado);
        //Americano 15%
        //Asiatico5%
        //Europe 30%

        resultado = calcularmarca(marca) * resultado;
        console.log(resultado);

        //Basico 20%
        //Completo 50%
        const incrementoPlan = obtenerPlan(plan);
        console.log(incrementoPlan);

        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
        guardarCargando(true);

        setTimeout(() => {
            //elimina spinner
            guardarCargando(false);

            ///Total
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            })

        }, 3000);





    };


    return (

        <Fragment>
            <form
                onSubmit={cotizarSeguro}
            >

                {error ? <Error>Todos los Campos Son Obligatorios</Error> : null}
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>

                </Campo>
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="year"
                        value={year}
                        onChange={obtenerInformacion}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                    </Select>

                </Campo>

                <Campo>
                    <Label>Plan</Label>
                    <InpitRadio
                        type="radio"
                        name="plan"
                        value="basico"
                        checked={plan === "basico"}
                        onChange={obtenerInformacion}
                    />Basico

                    <InpitRadio
                        type="radio"
                        name="plan"
                        value="completo"
                        checked={plan === "completo"}
                        onChange={obtenerInformacion}
                    />Completo
                </Campo>

                <Boton
                    type="submit"
                >Cotizar</Boton>

            </form>
        </Fragment>

    );

};

Formulario.propTypes = {
    guardarResumen: PropTypes.func.isRequired,
    guardarCargando: PropTypes.func.isRequired
}


export default Formulario;