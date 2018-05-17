import React from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = ( props ) => (
    <Auxiliary>
        <div>
            <Toolbar/>
                <main className= {classes.Content} >    
                        {props.children}
                </main>
        </div>
    </Auxiliary>
);

export default layout;
