import { Fragment, useState } from "react";
import Header from './components/header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from "./components/Resultado";

import Spinner from './components/Spiner'

import styled from '@emotion/styled';

const Contenedor = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const ContenedorFprmulario = styled.div`
background-color: #FFF;
padding: 3rem;
`;


function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      yera: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  const { cotizacion, datos } = resumen;

  return (
    <Fragment>
      <Contenedor>

        <Header
          titulo='Cotizador de seguros'
        />

        <ContenedorFprmulario>

          <Formulario
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />


          {cargando ? (<Spinner />) : null}
          <Resumen
            datos={datos}
          />

          {!cargando ? (
            <Resultado
              cotizacion={cotizacion}
            />
          ) : null}


        </ContenedorFprmulario>

      </Contenedor>
    </Fragment>
  );
}



export default App;
