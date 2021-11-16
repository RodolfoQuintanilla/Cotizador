import React, { Fragment, useState } from 'react';

const Header = ({ titulo }) => {

    //const [state, setstate] = useState(initialState);

    return (

        <Fragment>
            <header>
                <h1>{titulo}</h1>
            </header>
        </Fragment>

    );

};

export default Header;