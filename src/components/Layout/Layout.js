import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.css';
import {Container} from 'reactstrap';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxiliary>
        <Container fluid={true}>
            <Toolbar/>
            <main className= {classes.Content} >
                {props.children}
            </main>
        </Container>
    </Auxiliary>
);

export default layout;
