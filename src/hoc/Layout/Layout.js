import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import {Container} from 'reactstrap';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxiliary>
        <Toolbar/>
        <Container>
            <main className= {classes.Content} >
                {props.children}
            </main>
        </Container>
    </Auxiliary>
);

export default layout;
