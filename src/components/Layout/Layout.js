import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import {Container} from 'reactstrap';

const layout = ( props ) => (
    <Auxiliary>
        <Container>
            <div>Toolbar</div>
            <main className= {classes.Content} >
                {props.children}
            </main>
        </Container>
    </Auxiliary>
);

export default layout;
