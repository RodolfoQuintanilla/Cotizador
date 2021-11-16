import { Fragment } from "react";
import Header from './components/header';
import Formulario from './components/Formulario';

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
  return (
    <Fragment>
      <Contenedor>

        <Header
          titulo='Cotizador de seguros'
        />

        <ContenedorFprmulario>

          <Formulario

          />

        </ContenedorFprmulario>

      </Contenedor>
    </Fragment>
  );
}

export default App;
