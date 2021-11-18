import React from 'react';
import styled from '@emotion/styled';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import PropTypes from 'prop-types';

const Mensaje = styled.p`
   background-color: rgb(127,224,237);
   margin-top: 2rem;
   padding: 1erm;
   text-align: center;
`;
const ResultadoCotzacion = styled.div`
   text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:  rgb(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
color: #00838f;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin:0 ;
`;

const Resultado = ({ cotizacion }) => {



    return (

        (cotizacion === 0) ? <Mensaje>Elige Marca, Año y tipo de seguro</Mensaje> :
            (
                <ResultadoCotzacion>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextoCotizacion>El total es: $ <span> {cotizacion} </span> </TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotzacion>
            )
    );

};
Resultado.propTypes = {
    cotizacion: PropTypes.number.isRequired
}

export default Resultado;